FROM node

#App working directory
WORKDIR /usr/src/app

#Copy package.json
COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

EXPOSE 3000

CMD ["node","app.js"]