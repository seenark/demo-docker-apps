FROM node:18-alpine3.16 as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:18-alpine3.16 as npm
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine3.16 as prod
WORKDIR /app
COPY package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=npm /app/node_modules ./node_modules
EXPOSE 3000
CMD npm run start

