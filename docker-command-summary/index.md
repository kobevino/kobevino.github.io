---
title: "Docker Command Summary"
date: '2024-08-22'
spoiler: "docker run -it -p 9999:80 --name web nginx"
---

I think not only backend engineer but also frontend enginner should know hot to use **Docker**. Because most of services are orchestrated by **k8s**. To serve it, we have to provide *Dockerfile* or *docker-compose.yml* to DevOps engineer or SRE engineer. Learning Docker doesn't have a high barrier to entry.

## Docker Image

```sh
# Search docker image from docker hub
$ docker search [IMAGE_NAME]
# Show the list of 5 images
$ docker search --limit=5 [IMAGE_NAME]
# Show images that is downloaded.
$ docker images
# Show list of docker image id
$ docker images -q
# Delete docker image
$ docker rmi [IMAGE_ID]
$ docker rmi [IMAGE_NAME:tag]
$ docker rmi $(docker ps -a -q)

# Show information regarding the amount of disk space used by the Docker daemon
$ docker system df
```

## Docker Container

```sh
# Create a container
$ docker create [IMAGE_NAME]
# Create a container with name option
$ docker create --name [NEW_NAME] [IMAGE_NAME]
# Show continer ids
$ docker ps -a -q
# Delete a container
$ docker rm [CONTAINER_ID]
# Start a container
$ docker start [CONTAINER_ID]
# Run a container with various options
$ docker run -it [IMAGE_NAME]
$ docker run -it --name [NEW_NAME] [IMAGE_NAME]
$ docker run -it --rm --name [NEW_NAME] [IMAGE_NAME]
$ docker run -it -d --name [NEW_NAME] [IMAGE_NAME]
$ docker run -d -p [HOST_PC_PORT]:[CONTAINER_PORT] -v [HOST_PC_PATH]:[CONTAINER_PATH] --name web-server httpd
# Stop a container
$ docker stop [CONTAINER_ID]
# Pause a container
$ docker pause [CONTAINER_ID]
# Delete all containers
$ docker rm $(docker ps -a -q)
# Show container statistic resources that is being used
$ docker container stats

# ex)
# To attach container for apache
$ docker run -it -d --name web httpd /bin/bash
# Or run and exec
$ docker run -d --name web httpd
$ docker exec -it web /bin/bash
```

> 👉 When we use alpine image, we can't use `/bin/bash`. Because there is only consisted of necessary programs. Instead, use `/bin/sh`.

## Wrap Up

When I work on docker, I used to forget docker commands. So I thought I need to summarize commands that I often use. I'm sure it would be helpful for other engineers.
