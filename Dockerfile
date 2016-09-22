FROM node

WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install -g grunt \
 && npm install
ENTRYPOINT grunt
CMD serve
