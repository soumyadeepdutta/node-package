# Use a minimal Node.js image as the base
FROM node:18.13.0-alpine

# Set a non-root user for running the application
RUN addgroup -g 1001 nodejs && \
    adduser -u 1001 -G nodejs -s /bin/sh -D nodejs
USER nodejs

# Set the working directory
WORKDIR /home/nodejs/app

# Copy the application code into the container
COPY --chown=nodejs:nodejs . .

# Install dependencies with locked versions
RUN npm ci --only=production

# Expose the port that the application will run on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
