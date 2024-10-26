# Use an official Node.js image as the base for installing Bun
FROM node:18 as bun-installer

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Create an app directory
WORKDIR /app

# Copy package.json and bun.lockb for dependency management
COPY package.json bun.lockb ./

# Install dependencies with Bun
RUN bun install

# Copy all app files
COPY . .

# Build the Vite app for production
RUN bun run build

# -- Stage 2: Production Image --
FROM node:18-alpine

# Install Bun for the production environment
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=bun-installer /app/dist ./dist
COPY --from=bun-installer /root/.bun /root/.bun

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app
CMD ["bun", "run", "serve", "-s", "dist", "-l", "3000"]
