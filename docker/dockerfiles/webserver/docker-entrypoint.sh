#!/bin/sh

cd /app

# Install npm dependencies
npm install

# Compile and minify for production
npm run watch

# Start HTTP Server
http-server /app

# Fix docker container exiting with code 0
tail -f /dev/null