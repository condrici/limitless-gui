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

## Developer Notes

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Additional Resources

### Customizing Vite

See [Vite Configuration Reference](https://vitejs.dev/config/).
