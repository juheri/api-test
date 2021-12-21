FROM node:12
WORKDIR /app
COPY package.json
RUN npm install
COPY . /app
CMD ["npm start"]
EXPOSE 3001