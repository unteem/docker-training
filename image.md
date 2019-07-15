# Image



# Creation


## Command line

```bash
docker run --name redis -d redis
docker exec -it redis /bin/bash
useradd -g redis example
exit
docker commit upbeat_panini testredis:example
docker images testredis:example  
```


## tag

```
docker tag testredis:example  testredis:latest 
```


We'll not detail this one because we are DevOps.



## Dockerfile

[Command reference](https://docs.docker.com/engine/reference/builder/)

FROM

RUN

COPY

CMD / ENTRYPOINT


## Advanced Dockerfile

USER

ONBUILD

WORKDIR

VOLUME


## docker build

```
docker build -t registry/image:tag [-f Dockerfile] /path/to/context 
```


## best practices

- layers (space / caching)
- small
- minimal
- user / not root
- base image (official/organisation)
- .dockerignore
- use tags


## More best practices

https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

http://crosbymichael.com/dockerfile-best-practices.html

http://crosbymichael.com/dockerfile-best-practices-take-2.html

https://github.com/docker-library/official-images/



## Conclusion


### Dockerfile

+ ~~starts to be~~ is broadly adopted
+ layers



## Exercise!

```
cd exercises/image
```
