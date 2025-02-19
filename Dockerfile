ARG BUN_VERSION=1.1.13
FROM oven/bun:${BUN_VERSION}-slim as base

# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install node modules
COPY --link bun.lockb package.json ./
RUN bun install --ci

# Copy application code
COPY --link . .

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "start" ]