# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY . .


RUN npm install

RUN npm run build

# start app
CMD ["npm", "start"]
