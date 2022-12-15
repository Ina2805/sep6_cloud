FROM node:14
WORKDIR /usr/src/app
COPY package*.json App.js ./
RUN npm i
EXPOSE 80
CMD ["node", "App.js"] 