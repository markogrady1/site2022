FROM node:14

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app/

CMD ["npm", "start"]
