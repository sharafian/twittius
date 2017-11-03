FROM node:8

COPY . .
RUN npm install

CMD [ "node", "index.js" ]
