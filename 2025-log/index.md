---
title: "2025.log"
date: '2025-11-18'
spoiler: "Micro Frontend Architecture, CI/CD Optimization"
---

![Concino Concrete](./2025-log/concino-concrete.png)

It's been exactly one year since I moved from NCSOFT to Habit Factory today. I felt like it was time to look back on this past year. The thing I love the most about myself is that I've stuck to my routine every single day and as a result, I'm down 10kg. 😀
Also, the wide range of my work has actually helped me improve my skills a lot.

## Micro-Frontend Architecture using S3 and Module Federation

*The things the team manager asked me for*

1. The legacy project, which is built on a monolithic architecture, had tons of issues. The two major issues we faced were long build times and severe side effects.
2. Very limited communication with the infrastructure team.
3. Lack of diverse hands-on experience for junior developers

So, I studied a lot about `Micro Frontend Architecture` at that time. As a result, below is the architecture I designed and implemented.

![Micro Frontend Architecture](./2025-log/micro-frontend-architecture.png)

* `Module-Federation` : This is core to implement micro-frontend architecture. This enables each applications to share modules at runtime. I used [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) for module federation.

```ts {8-22}{30}
// shell vite.config.ts
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const CLOUDFRONT_DOMAIN = 'https://yourdomain.cloudfront.net'

const getRemoteUrls = (mode: string) => {
  const isProd = mode === 'production';
  
  return {
    health: isProd 
			? `${CLOUDFRONT_DOMAIN}/health/assets/remoteEntry.js`
      : 'http://localhost:3001/assets/remoteEntry.js',
    insurance: isProd
			? `${CLOUDFRONT_DOMAIN}/insurance/assets/remoteEntry.js`
      : 'http://localhost:3002/assets/remoteEntry.js',
    mydata: isProd
			? `${CLOUDFRONT_DOMAIN}/mydata/assets/remoteEntry.js`
      : 'http://localhost:3003/assets/remoteEntry.js',
  };
};

export default defineConfig(async ({ mode }) => {
  return {
    plugins: [
			react(),
			federation({
				name: 'shell',
				remotes: getRemoteUrls(mode),
				shared: ['react', 'react-dom', 'react-router-dom'],
			}),
		],
		build: {
			modulePreload: true,
			target: 'esnext',
			minify: true,
			cssCodeSplit: true,
		},
		server: {
			port: 3000,
			strictPort: true,
		},
		preview: {
			port: 3000,
			strictPort: true
		},
  }
})
```

```ts {9-16}
// micro-app vite.config.ts
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'health',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/App.tsx',
			},
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
	],
	build: {
		modulePreload: true,
		target: 'esnext',
		minify: true,
		cssCodeSplit: true,
	},
	server: {
		port: 3001,
		strictPort: true,
	},
	preview: {
		port: 3001,
		strictPort: true,
	},
});
```

* `S3` : This is a static web server for react app that is not supported SSR.

![S3](./2025-log/s3.png)

* `S3(cache bucket)` : This is a bucket to cache dependencies.

```yml
# buildspec.yml
cache:
  paths:
    - '.pnpm-store/**/*'
```

![cache-dependency](./2025-log/cache-dependency.png)

![s3-cache-bucket](./2025-log/s3-cache-bucket.png)

* `Cloudfront` : This is for static resources cache.
* `ECS(remote cache server)` : This is a critical key for remote caching on turborepo project. [ducktors/turborepo-remote-cache](https://github.com/ducktors/
turborepo-remote-cache)
- `cache hit`: The artifact was found in the cache → no build needed ❌
- `cache miss` : The artifact was not found in the cache → build triggered ✅

```yml
# buildspec.yml
pre_build:
    commands:
      - export TURBO_API=$TURBO_API
      - export TURBO_TEAM=$TURBO_TEAM
      - export TURBO_TOKEN=$TURBO_TOKEN
      - mkdir -p .turbo
      - |
        echo "{
          \"apiurl\": \"$TURBO_API\",
          \"teamslug\": \"$TURBO_TEAM\",
          \"token\": \"$TURBO_TOKEN\"
        }" > .turbo/config.json
      - cat .turbo/config.json
cache:
  paths:
    - '.turbo/**/*'
```
![cache-hit](./2025-log/cache-hit.png)

### Issues and Solution 

1. Bundle size issue

![cache-hit](./2025-log/bundle-size-issue.png)

If a build artifact exceeds 500 KB, it’s not an absolute rule, but it’s considered a threshold where performance warnings may occur.
Vite uses Rollup internally, and by default, the `chunkSizeWarningLimit` is set to 500 KB.

So here is my solution.

```ts
// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		visualizer({ open: true })
	],
	build: {
		modulePreload: true,
		target: 'esnext',
		minify: true,
		cssCodeSplit: true,
	},
});
```

```sh
$ pnpm --filter [PROJECT_FOLDER_NAME] build:dev
```

![rollup-plugin-visualizer](./2025-log/rollup-plugin-visualizer.png)

The problematic file right now is `__federation_expose_AppApp-DeQt32zZ.js`, which bundles Datadog, Braze, Sentry, and other libraries together.

I tried to try performing `code splitting` using `manual chucnk`.

```ts
// vite.config.ts
build: {
	modulePreload: true,
	target: 'esnext',
	minify: true,
	cssCodeSplit: true,
	rollupOptions: {
		output: {
			manualChunks(id) {
				if (id.includes('node_modules')) {
					if (id.includes('@sentry')) return 'vendor-sentry';
					if (id.includes('@datadog')) return 'vendor-datadog';
					if (id.includes('@braze')) return 'vendor-braze';
				}
			}
		},
	}
},
```

![manual-chunk](./2025-log/manual-chunk.png)


***827.55 kB → 348.93 kB*** BOOM!

2. Memory issue on Codebuild

`counsel:build:dev: Error: write EPIPE`

The error above occurs due to insufficient memory during the build. This project is a monorepo managed with Turborepo and contains multiple domain applications, which can lead to high memory usage and cause this issue. We need to improve the compute performance.

![codebuild-compute](./2025-log/codebuild-compute.png)

## CI/CD Optimization for ECS and Static Resource Separation

This was my second mission at the company, and I realized it was what I wanted to do—a first step towards DevOps.
First of all, the below diagram shows the existing architecture.

![existing-architecture](./2025-log/existing-architecture.png)

After deploying a monolithic Nuxt project on ECS, 500 errors can occur for about a minute. This usually happens because the large Docker image (~5 GB) slows container startup and Nuxt SSR page builds, and health checks may mark the container healthy before it’s fully ready. Once the initial build and caching complete, the server responds normally.

### The List I have to solve

* `Docker image optimization` - **5G -> 1G**

```dockerfile {11}
FROM public.ecr.aws/docker/library/node:18.17.0-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY .npmrc package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .

ARG NUXT_APP_CDN_URL

RUN NUXT_APP_CDN_URL=$NUXT_APP_CDN_URL yarn build

FROM public.ecr.aws/docker/library/node:18.17.0-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
```

When writing a Dockerfile, one important tip is to leverage Docker layer caching by placing frequently changed parts at the bottom.

* `ECR remote cache` : **20mins -> 12mins**. We have to use `buildx` command for docker layer caching. [Announcing remote cache support in Amazon ECR for BuildKit clients](https://aws.amazon.com/ko/blogs/containers/announcing-remote-cache-support-in-amazon-ecr-for-buildkit-clients/)

```yml {23-28}
  build:
    commands:
      - echo "Building the Docker image..."
      - docker buildx create --use
      - |
        docker buildx build --build-arg NUXT_APP_CDN_URL="$CDN_URL/$COMMIT_ID" \
          -t "$REPOSITORY_URI"/"$IMAGE_REPO_NAME":"$IMAGE_TAG" \
          -t "$REPOSITORY_URI"/"$IMAGE_REPO_NAME":latest \
          --cache-to mode=max,image-manifest=true,oci-mediatypes=true,type=registry,ref="$REPOSITORY_URI"/"$IMAGE_REPO_NAME":"$CACHE_IMAGE_TAG" \
          --cache-from type=registry,ref="$REPOSITORY_URI"/"$IMAGE_REPO_NAME":"$CACHE_IMAGE_TAG" \
          --push .
      - docker create --name temp-container "$REPOSITORY_URI"/"$IMAGE_REPO_NAME":"$IMAGE_TAG"
      - docker cp temp-container:/app/.output/public ./static
      - docker rm temp-container
```

![ecr-remote-cache](./2025-log/ecr-remote-cache.png)
![docker-layer-cache](./2025-log/docker-layer-cache.png)

* `static resources separation` : I will use the environment variable NUXT_APP_CDN_URL, which points to the CloudFront URL. During the Docker build, the static resources generated as artifacts are copied from the container to the server using the docker cp command. After the build, these files are synced to S3.

```dockerfile
ARG NUXT_APP_CDN_URL

RUN NUXT_APP_CDN_URL=$NUXT_APP_CDN_URL yarn build
```

```yml
  build:
    commands:
      - docker cp temp-container:/app/.output/public ./static
      - docker rm temp-container
  post_build:
    commands:
      - echo "Uploading static files to S3..."
      - aws s3 sync ./static/ s3://"$BUCKET_NAME"/"$COMMIT_ID"
```

Finally, I designed new architecture. BOOM!

![new-architecture](./2025-log/new-architecture.png)

### Issue and Solution

![cors-issue](./2025-log/cors-issue.png)

This was the biggest issue after changing a new architecture. After the TTL expires, CORS errors occur due to client requests without an Origin header.

![cloudfront-1](./2025-log/cloudfront-1.png)
![cloudfront-2](./2025-log/cloudfront-2.png)

**CORS preflight** is a mechanism where the browser checks with the server before sending certain cross-origin requests (like POST, PUT, or requests with custom headers). The browser sends an OPTIONS request to ask if the actual request is allowed.

If the server doesn’t handle OPTIONS requests or return the proper CORS headers (Access-Control-Allow-Methods, Access-Control-Allow-Headers), the browser will block the request and raise a CORS error.

To fix this, you need to allow the `OPTIONS` method and configure CORS to handle preflight requests, ensuring that cross-origin requests can succeed safely.

## Wrap Up

I've worked as a frontend engineer for about 10 years. Looking back on my career, the thing I love the most about myself is that I really care about learning new things. When I worked on the projects above, I realized there were areas where I was lacking. To improve, I spent my weekends attending free courses for professionals. It was a great opportunity to strengthen my fundamental knowledge, and meeting people at the academy inspired me to work even harder.