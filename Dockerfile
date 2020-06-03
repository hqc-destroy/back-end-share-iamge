# Base image
FROM node:latest
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# install dependencies package in package.json
RUN npm install

# Bundle app source
COPY . /app

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the
EXPOSE 3000

# run bash node index.js
CMD [ "npm", "start" ]