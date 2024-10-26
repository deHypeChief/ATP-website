FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install curl
RUN apk add --no-cache curl

# Install Bun
RUN curl -fsSL https://bun.sh/install | sh

# Set Bun's binary directory to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Copy package.json and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Expose the application port
EXPOSE 3000

# Start the application using serve
CMD ["bun", "serve", "-s", "dist"]