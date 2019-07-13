# Image



# Creation


## Command line

```bash
docker run -it debian /bin/bash
cat 'hello world' > /tmp/hello
exit
docker commit
```


## tag

```
docker tag old_tag new_tag
```


We'll not detail this one because we are DevOps.



## Dockerfile

[Command reference](http://docs.docker.com/reference/builder/)

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
docker build -t registry/image:tag [-f Dockerfile] /path/to/conext 
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

https://docs.docker.com/articles/dockerfile_best-practices/

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
