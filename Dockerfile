# base image
FROM node:latest

ARG REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

# set working directory
RUN mkdir /usr/src/app

ENV REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=$REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn run build

CMD ["yarn", "start"]