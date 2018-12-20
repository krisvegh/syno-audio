# Build the dev image
FROM node:10 AS dev
RUN mkdir -p /srv
WORKDIR /srv
ADD package*.json ./
RUN npm install && npm cache clean --force

# Add required file
ADD . .

# Build
RUN npm run build

# Default command to start
CMD npm start
EXPOSE 3000

#
# Build production image
#
FROM nginx:1.13 as prod
COPY --from=dev /srv/build/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf