FROM node:16-alpine

WORKDIR /var/app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start-dev"]