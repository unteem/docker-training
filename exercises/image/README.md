# build an immutable docker image

Build an nginx docker image with your personal index.html.
(You'll need FROM and COPY)

help:
http://devdocs.io/docker~1.12/engine/reference/builder/index
https://docs.docker.com/engine/reference/builder/

# build an image to serve this presentation

This presentation can be served by grunt.
Grunt is a tool to automatize web development.
It is an npm package (npm install -g grunt)
The command used to start the presentation is "grunt serve".

The objective is to build an image that could render any RevealJS presentation by mounting the presentation inside.
(You'll need FROM, RUN, WORKDIR, CMD)

I advise to use node docker image to start from.

Can you see presentation from your peers IP?

# Side note

What is the first line you see when you build?
Can you increase the speed of your build?
(dockerignore is your friend!)
