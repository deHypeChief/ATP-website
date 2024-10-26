# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install curl to allow for Bun installation
RUN apk add --no-cache curl

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set Bun's binary directory to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy package files and install dependencies using Bun
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of your application code
COPY . .

# Build your application (if applicable)
RUN bun build

# Expose the desired port
EXPOSE 3000

# Serve the application using Bun
CMD ["bun", "serve", "dist"]
