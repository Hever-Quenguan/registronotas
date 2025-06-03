# Stage 1: Build Angular app
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build -- --configuration production

# Stage 2: Serve app with nginx
FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/skote /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
