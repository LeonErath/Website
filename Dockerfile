# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "start"]