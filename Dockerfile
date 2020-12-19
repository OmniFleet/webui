FROM node:current-alpine as BUILD

ENV PATH /app/node_modules/.bin:$PATH
ARG APP_VERSION
ENV REACT_APP_VERSION=$APP_VERSION
ENV REACT_APP_GOOGLE_MAPS_API_KEY="__GOOGLE_API_KEY__"
ENV REACT_APP_API_GATEWAY_URI="__API_GATEWAY_URI__"

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/30-key-replacement.sh /docker-entrypoint.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
