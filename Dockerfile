# Stage 1: Build and Test
FROM node:22-alpine AS build

# Install sqlite3, git, and npm
RUN apk add --no-cache sqlite git && npm install -g pnpm@9.15.1 && npm install -g npm@11.0.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the data directory to the working directory
COPY data ./data

# Copy the .env file to the working directory
COPY .env .env

# Generate the necessary configuration files
RUN pnpm exec svelte-kit sync

# Run tests
RUN pnpm run test

# Build the SvelteKit app with environment variables
RUN NODE_ENV=production pnpm run build

# Stage 2: Production
FROM node:22-alpine

# Install sqlite3, git, and npm
RUN apk add --no-cache sqlite git && npm install -g pnpm@9.15.1

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the build stage
COPY --from=build /app/build ./build
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/data ./data

# Install only production dependencies
RUN pnpm install --prod && pnpm prune

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Command to run the app
CMD ["node", "build"]