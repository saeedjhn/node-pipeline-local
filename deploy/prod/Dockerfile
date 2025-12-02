FROM node:22.21.1 as development

ENV DIR=/app

WORKDIR $DIR

COPY package*.json ./

RUN npm ci --development

# Copy the .env and .env.development files
#COPY .env .env.development ./
COPY tsconfig*.json ./
COPY src/ src/

RUN npm run build

FROM node:22.21.1 as builder

ENV DIR=/app

WORKDIR $DIR

ARG NODE_ENV=production

COPY package*.json ./

RUN npm ci --production

FROM node:22-alpine3.22 as production

ENV DIR=/app

WORKDIR $DIR

#RUN apk --no-cache add curl postgresql-client

COPY package*.json ./

COPY --from=builder /app/node_modules ./node_modules
COPY --from=development /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]

# Base image
#FROM node:22-alpine3.22
#
## Create app directory
#WORKDIR /app
#
## A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY package*.json ./
#
## Install app dependencies
#RUN npm install
#
## To address all issues (including breaking changes)
#RUN #npm audit fix --force
#
## Bundle app source
#COPY . .
#
## Copy the .env and .env.development files
##COPY .env .env.development ./
#
## Creates a "dist" folder with the production build
#RUN npm run build
#
## Expose the port on which the app will run
#EXPOSE 3000
#
## Start the server using the production build
#CMD ["npm", "run", "start:prod"]
