# Image



# Creation


## Command line

```bash
docker run -it debian /bin/bash
cat 'hello world' > /tmp/hello
exit
docker commit
```


We'll not detail this one because we are DevOps.


## Dockerfile

[Command reference](http://docs.docker.com/reference/builder/)

RUN

COPY

CMD / ENTRYPOINT


## best practices

https://docs.docker.com/articles/dockerfile_best-practices/

http://crosbymichael.com/dockerfile-best-practices.html

http://crosbymichael.com/dockerfile-best-practices-take-2.html


## Packer!

You can use chef/puppet/ansible \o/

Note:
Dockerfile RUN bash feels hacky right?


## Conclusion


### Dockerfile

+ starts to be broadly adopted
+ layers
- bash feels hacky :/


### Packer

+ You can reuse your recipes (past, future)
+ feels right
- you stil need Docker to add VOLUME, CMD or PORT
- layers (future?)



# Your turn!

Pick an app, and dockerize it!

If you don't know which one, here is the list!

https://github.com/IndiePaaS/IndiePaaS/labels/needs%20dockerfile

