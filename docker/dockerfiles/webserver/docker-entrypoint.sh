#!/bin/sh

cd /app

# Install npm dependencies
npm install

# Compile and minify for production
npm run build

# Start HTTP Server
http-server dist

# Fix docker container exiting with code 0
tail -f /dev/null