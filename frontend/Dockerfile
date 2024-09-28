# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /usr/app
COPY ./common ./common

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy application and common code
COPY ./ ./

RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "start"]
