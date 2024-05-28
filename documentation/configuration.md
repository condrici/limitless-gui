# Limitless GUI

## Configuration

### Http Development Server Port

Running "npm run dev" will start Vite’s internal http server. If there’s no port added to ./vite.config.js, the http server will use Vite’s internal port, which should be 5173 (see Vite documentation). The command 'npm run dev' is a reference to the "./node_modules/.bin/vite" command, as defined in package.json. If this port is changed, it’s important to update the exposed port in the docker-composer.yaml, or otherwise the host machine will not be able to reach the container.

### Http Production Server Port

Running "npm run build" will start the production server. The production server is not the same as Vite’s internal http server, so beware of port conflicts when switching between development and production. The command "npm run build" is a reference to the "./node_modules/.bin/vite build && http-server" command, as defined in package.json. If there is no port appended to the "http-server" command, the server's default port should be 8080 (see http-server documentation). The docker container uses http-server, an npm package installed globally (-G). If this port is changed, it’s important to update the exposed port in the docker-composer.yaml, or otherwise the host machine will not be able to reach the container.

### Http Server Public Folder

The public folder that the 'http-server' service points to, has to be entered wherever the http-server runs
- /docker/dockerfiles/docker-entrypoint.sh (the script that is triggered when the container starts)
- /package.json (the npm commands/scripts that start the http-server)
- docker-compose.json (synced volumes that sync the container's http-server public folder and the git files)