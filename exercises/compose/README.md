# make your first docker-compose

This first docker-compose is exactly what we built previously: grunt + nginx.

Make a docker-compose.yml file to start a web server (nginx) and a grunt "application" server to serve this presentation.

When issuing `docker-compose up` it should start the full stack, create the appropriate networks.

# Moby Couter

From the rest of the training, we'll use the application moby counter.
(it is located in exercises/moby-counter)

## Start it

And try it locally.
(docker-compose up)

## Migrate to v2

Migrate the version of compose from v1 to v2 (with isolated networks).
(Check [documentation](https://docs.docker.com/compose/compose-file/#/upgrading))

Start it and make sure it is working locally.
Try to access it from your peers.

Optional:
Make the data persistent for redis.
(with named volume)
(Check redis image's documentation on the hub)

## Start to build the ci/cd pipeline

Just write down what is necessary to:
 - build docker image
 - deploy to your local docker

It will be the skeleton of our pipeline.
