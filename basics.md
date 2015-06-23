# Docker Basics



## Terminology

 - image
 - layer
 - container
 - Dockerfile
 - registry 


## Image

An image is a state of a file system.
It is the rootfs and everything you put on it like libs, bin...
You can think of it as the folder where you chroot.


![docker image](/images/docker-filesystems-debian.png)

[source](http://docs.docker.com/terms/image/)


## Layer

A layer is a set of data you can add to another layer.
Together they can form an image.
You can think of it as the commit in a git history


![docker layers](/images/docker-filesystems-multilayer.png)

[source](http://docs.docker.com/terms/layer/#layer)


## Container

A container is a running image.


## Dockerfile

A Dockerfile is a text document that contains all the commands you would normally execute manually in order to build a Docker image.

[source](http://docs.docker.com/reference/builder/)


## Registry

Docker Registry stores and distributes images centrally. It's where you push images to and pull them from.

[source](http://docs.docker.com/registry/)



## Illustration of Basics


## image/layer/registry/

`docker pull debian:jessie`


## container

`docker run debian:jessie echo hello world`


## Dockerfile

```bash
cat > Dockerfile <<EOF
FROM debian:jessie
CMD echo hello world
EOF

docker build -t myimage .
docker run myimage
```


## Image sharing

You could `docker push` but I prefer git!
