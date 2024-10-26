# Stage 1: Build the API server with Bun
FROM oven/bun:1 AS build
WORKDIR /app

# Copy package.json and bun.lockb to install dependencies
COPY package.json bun.lockb ./

# Install dependencies with Bun
RUN bun install --frozen-lockfile

# Copy all project files
COPY . .

# Build the API server
RUN bun build src/index.ts

# Stage 2: Create a lightweight image for running the API server
FROM oven/bun:1 AS production
WORKDIR /app

# Copy built application and dependencies from the previous stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src/index.ts ./src/index.ts  

# Adjust if your build outputs elsewhere

# # Set environment variable for production
# ENV NODE_ENV=production

# Expose the port your API will run on (adjust as needed)
EXPOSE 8000

# Command to run the API server
CMD ["bun", "run", "src/index.ts"]
