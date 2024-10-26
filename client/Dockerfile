# Use the official Node.js image as a base
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Install curl to allow for Bun installation
RUN apk add --no-cache curl

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set Bun's binary directory to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of your application code
COPY . .

# Build your application (if applicable)
RUN bun build

# Use a smaller image for the production environment
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app .

# Set the environment to production
ENV NODE_ENV=production

# Start your application
CMD ["bun", "start"]
