# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY . .
RUN yarn intall --frozen-lockfile

# start app
CMD ["yarn", "start"]
