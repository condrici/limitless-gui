# Limitless GUI

Limitless GUI is one of the components of the Limitless Project that serves as a graphical interface.

It is based on VueJS (front-end framework) and Vite (build tool) and it communicates with the Limitless API - which serves as a gateway for other services. In the README of the installation repository "Limitless", you can find a diagram that shows how all components work together.

## Getting Started

#### Project Components

- limitless (Installation Repository)
- limitless-gui (Web Graphical Interface, JavaScript/VueJS, [repository link](https://github.com/condrici/limitless-gui))
- limitless-api (Web API Gateway, PHP/Laravel, [repository link](https://github.com/condrici/limitless-api))
- limitless-analytics (Analytics, Python/Flask API/BeautifulSoup, [repository link](https://github.com/condrici/limitless-analytics))

#### Installation Requirements
- Docker (needed for the infrastructure)
- Lnav utility (used for aggregating log files)
- Bash utility (for various scripts)

#### Installation Steps
- From the "limitless" repostory, run command: sh commands/install

## Important Files

**docker/dockerfiles/docker-entrypoint.sh** (commands that get executed when the docker environment starts)

**.env** (environment variables used within the Docker environment)

**vite.config.js** (Vite configuration file)

**package.json** (NPM project dependencies)

**src/** (Vite project files)

## Commands

Some of the commands below will be triggered in the docker-entrypoint.sh file automatically when starting the Docker environment.

**npm install** (install NPM packages defined in package.json)

**npm run build** (build the application for production)

**npm run dev** (build the application for development)

**npm run watch** (build the application for development and reload after files have been changed)

**npm list** (lists all npm packages and their versions)

## Developer Notes

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Configuration

### Http Development Server Port

Running <npm run dev> will start Vite’s internal http server. If there’s no port added to ./vite.config.js, the http server will use Vite’s internal port, which should be 5173 (see Vite documentation). The command <npm run dev> is a reference to the './node_modules/.bin/vite' command, as defined in package.json. If this port is changed, it’s important to update the exposed port in the docker-composer.yaml, or otherwise the host machine will not be able to reach the container.

### Http Production Server Port

Running <npm run build> will start the production server. The production server is not the same as Vite’s internal http server, so beware of port conflicts when switching between development and production. The command <npm run build> is a reference to the './node_modules/.bin/vite build && http-server' command, as defined in package.json. If there is no port appended to the 'http-server' command, the server's default port should be 8080 (see http-server documentation). The docker container uses http-server, an npm package installed globally (-G). If this port is changed, it’s important to update the exposed port in the docker-composer.yaml, or otherwise the host machine will not be able to reach the container.

## Additional Resources

### Customizing Vite

See [Vite Configuration Reference](https://vitejs.dev/config/).
