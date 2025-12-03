###############################################
# Development Stage
###############################################
FROM node:22.21.1 AS development

# Set working directory and environment variables for dev
ENV DIR=/app \
    NODE_ENV=development

WORKDIR $DIR

# Copy package.json and package-lock.json for dependency install
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm ci --development

# Copy TypeScript config and source code
COPY tsconfig*.json ./
COPY src/ src/

# Build the project (transpile TS -> JS)
RUN npm run build

###############################################
# Builder Stage (Production dependencies only)
###############################################
FROM node:22.21.1 AS builder

# Set working directory and environment variables for prod build
ENV DIR=/app \
    NODE_ENV=production

WORKDIR $DIR

# ARG for NODE_ENV (can be overridden at build time)
ARG NODE_ENV=production

# Copy package files for production install
COPY package*.json ./

# Install only production dependencies
RUN npm ci --production

###############################################
# Production Stage
###############################################
FROM node:22-alpine3.22 AS production

# Set working directory and environment variables for prod runtime
ENV DIR=/app \
    NODE_ENV=production

WORKDIR $DIR

# Optional: install OS dependencies if needed (commented out)
#RUN apk --no-cache add curl postgresql-client

# Copy package files (for consistency / metadata)
COPY package*.json ./

# Copy node_modules from builder stage (only production deps)
COPY --from=builder /app/node_modules ./node_modules

# Copy compiled JS from development stage
COPY --from=development /app/dist ./dist

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]
