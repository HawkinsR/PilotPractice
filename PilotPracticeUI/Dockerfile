FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:latest AS host
COPY --from=build /app/dist/pilot-practice-ui/browser /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
