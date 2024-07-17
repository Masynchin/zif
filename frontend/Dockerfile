FROM node:22.4.1-slim

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "run", "start", "--", "--host", "--port", "80" ]
