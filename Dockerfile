FROM node:latest

ARG REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
ENV REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=$REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build
CMD ["yarn", "start"]