FROM node:0.10-onbuild

RUN npm install -g grunt

ENTRYPOINT ["grunt"]
CMD ["serve"]

VOLUME /usr/src/app
