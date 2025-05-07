# BASE PROFILE
FROM node:20.15.0-alpine AS base
RUN mkdir -p /opt/server
WORKDIR /opt/server
RUN adduser -S server
RUN chown -R server /opt/server
COPY package*.json ./

# DEVELOPMENT PROFILE
FROM base AS development
RUN npm install && npm cache clean --force
COPY . ./
USER server
CMD ["sh"]
