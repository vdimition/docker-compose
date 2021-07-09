FROM node:14

WORKDIR /
COPY . .

CMD [ "node", "index.js" ]
