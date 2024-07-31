# backend/Dockerfile
FROM node:18-alpine

WORKDIR /usr/app
COPY common ./common

# Set working directory
WORKDIR /usr/app/frontend/

# Install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy application and common code
COPY frontend ./

# Create a "dist" folder with the production build
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "start"]
