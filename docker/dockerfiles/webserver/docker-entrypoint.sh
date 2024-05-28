#!/bin/sh

cd /app

# Install npm dependencies
npm install

# Start Development Environment (uses Vite's internal server)
npm run dev

# Start Production Environment (http-server is required)
# npm run build
# http-server -p 8080 /app

# Start Preview Environment (uses Vite's internal server)
# npm run preview

# Fix docker container exiting with code 0
tail -f /dev/null