FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine as prod

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]