# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY . .
RUN yarn install --frozen-lockfile

# start app
CMD ["yarn", "start"]
