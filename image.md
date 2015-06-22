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

[Command reference](https://doc)

RUN
COPY
CMD


## 10 best practices


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

https://github.com/indiepaas/indiepaas/issues
