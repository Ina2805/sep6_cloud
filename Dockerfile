FROM node:14
WORKDIR /usr/src/app
COPY package*.json /src/App.js ./
RUN npm i
EXPOSE 80
CMD ["node", "src/App.js"] 