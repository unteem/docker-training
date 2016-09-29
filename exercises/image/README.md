# build an immutable docker image

Build an nginx docker image with your personal index.html.
(default index.html in nginx is located in /usr/share/nginx/html)
(You'll need FROM and COPY)

help:
http://devdocs.io/docker~1.12/engine/reference/builder/index
https://docs.docker.com/engine/reference/builder/

# Build an image for echo

Understand differences between ENTRYPOINT and CMD

The objective is to build an image that would copy current behaviour of "echo" command.

It should by default echo "Hello world".
If we pass arguments, it would echo what we pass.

# build an image to serve this presentation

This presentation is in html and can be served by grunt.
Grunt is a tool to automatize web development.
It is an npm package (npm install -g grunt)
The command used to start the presentation is "grunt serve".
(But we could also need to use grunt test)

The objective is to build an image that could render this presentation.
(You'll need FROM, RUN, WORKDIR, CMD)

I advise to use node:0.10-onbuild docker image to start from.

The Dockerfile should be created at the / of this presentation.

Can you see presentation from your peers IP?

# Side note

Read the doc

What is the first line you see when you build?
Can you increase the speed of your build?
(dockerignore is your friend!)
