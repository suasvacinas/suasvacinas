FROM node:6

MAINTAINER acdcjunior

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app

RUN npm run build:prod
