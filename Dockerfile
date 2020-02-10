FROM node:10
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json /usr/src/app
RUN npm install
# Copy app source code
COPY . /usr/src/app
#Expose port and start application
EXPOSE 3002
CMD [ "npm", "start" ]