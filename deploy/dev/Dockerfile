# Base dev image
FROM node:22-alpine3.22 AS development

# Environment variables for dev
ENV DIR=/app \
    NODE_ENV=development \
    DEBUG=*

# Set working directory
WORKDIR $DIR

# Copy package files for dependency install
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm ci

# Copy project source
COPY . .

# Expose application port
EXPOSE 3000

# Run application in dev mode
CMD ["npm", "run", "start:dev"]
