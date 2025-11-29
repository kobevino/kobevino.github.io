---
title: "Micro-Frontend-With-S3"
date: '2025-11-29'
spoiler: "module federation"
---

Since I moved to new company, I've been responsible for designing the architecture for a new project.

## Micro-Frontend Architecture

*The things the team manager asked me for*

1. The legacy project, which is built on a monolithic architecture, had tons of issues. The two major issues we faced were long build times and severe side effects.
2. Very limited communication with the infrastructure team.
3. Lack of diverse hands-on experience for junior developers

So, I studied a lot about `Micro Frontend Architecture` at that time. As a result, below is the architecture I designed and implemented.

![Micro Frontend Architecture](./micro-frontend-with-s3/micro-frontend-architecture.png)

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

![S3](./micro-frontend-with-s3/s3.png)

* `S3(cache bucket)` : This is a bucket to cache dependencies.

```yml
# buildspec.yml
cache:
  paths:
    - '.pnpm-store/**/*'
```

![cache-dependency](./micro-frontend-with-s3/cache-dependency.png)

![s3-cache-bucket](./micro-frontend-with-s3/s3-cache-bucket.png)

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
![cache-hit](./micro-frontend-with-s3/cache-hit.png)

### Issues and Solution 

1. Bundle size issue

![cache-hit](./micro-frontend-with-s3/bundle-size-issue.png)

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

![rollup-plugin-visualizer](./micro-frontend-with-s3/rollup-plugin-visualizer.png)

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

![manual-chunk](./micro-frontend-with-s3/manual-chunk.png)


***827.55 kB → 348.93 kB*** BOOM!

2. Memory issue on Codebuild

`counsel:build:dev: Error: write EPIPE`

The error above occurs due to insufficient memory during the build. This project is a monorepo managed with Turborepo and contains multiple domain applications, which can lead to high memory usage and cause this issue. We need to improve the compute performance.

![codebuild-compute](./micro-frontend-with-s3/codebuild-compute.png)

## Wrap Up

While designing the micro-frontend project, I gained a much deeper understanding of the concept of microservices. On top of that, I had the opportunity to handle everything from A to Z — including infrastructure — which significantly expanded the scope of my work. It turned out to be a really meaningful experience.