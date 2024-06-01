# build the Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci --force
COPY . .
RUN npm run build

# serve the Angular app with nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

# copy the built Angular app from the build stage
COPY --from=build /app/dist/front-furniture/browser .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
