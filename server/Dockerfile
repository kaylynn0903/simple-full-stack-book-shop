FROM node:20-alpine3.18
WORKDIR /server
COPY . .
RUN npm install && npm run build
CMD ["node", "./build/index.js"]