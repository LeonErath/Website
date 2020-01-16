# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn run build

CMD ["yarn", "start"]