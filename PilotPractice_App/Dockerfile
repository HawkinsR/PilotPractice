FROM node:alpine AS build
WORKDIR /app
COPY ./ ./ 
RUN npm ci
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist/pilot-practice-app/browser /usr/shar/nginx/html
