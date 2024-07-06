# Limitless GUI

Limitless GUI is one of the components of the Limitless Project that serves as a graphical interface. It communicates directly with the Limitless API, which serves as a gateway for other services/

Technologies
- VueJS (JavaScript front-end framework)
- Vite (build tool that supports VueJS, but also other frameworks; similar to Webpack)
- TailwindCSS (CSS framework)
- PostCSS (CSS pre-processor)

Other Implementations
- Bidirectional GUI update via Websockets

Recommended IDE Setup
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Getting Started

#### Project Components

- limitless (Installation Repository)
- limitless-gui (Web Graphical Interface, JavaScript/VueJS, [repository link](https://github.com/condrici/limitless-gui))
- limitless-api (Web API Gateway, PHP/Laravel, [repository link](https://github.com/condrici/limitless-api))
- limitless-assets (Asset Management, PHP/Laravel, [repository link](https://github.com/condrici/limitless-assets))
- limitless-analytics (Analytics, Python/Flask API/BeautifulSoup, [repository link](https://github.com/condrici/limitless-analytics))

#### Installation Requirements
- Docker (needed for the infrastructure)
- Lnav utility (used for aggregating log files)
- Bash utility (for various scripts)

#### Installation Steps
- From the "limitless" repostory, run command: sh commands/install

## Important Files and Directories

**./docker/dockerfiles/docker-entrypoint.sh** 
- Commands that get executed when the docker environment starts

**.env** 
- Environment variables used within the Docker environment

**./vite/vite.config.js** 
- Vite configuration file

**./vite/package.json** 
- NPM project dependencies
- MPM custom script commands (npm run dev, etc)

**./vite/src/** 
- Vite project files

**./vite/public** 
- Folder for assets (such as images) for files that have certain needs (read Vite documentation)
- Assets here will be served at root / path during dev and copied to the root of the dist directory as-is
- You should always reference public assets using root absolute path - for example, public/icon.png
- Assets in public cannot be imported from JavaScript

## Commands

Some of the commands below will be triggered in the docker-entrypoint.sh file automatically when starting the Docker environment.

**docker exec -it limitless-gui sh**
- Open limitless-gui container via terminal

**npm install** 
- Install NPM packages defined in package.json

**npm run build** 
- Build the application for production 
- No live reload, webserver: http-server service, served location (minified): ./dist/index.html

**npm run dev** 
- Build the application for development 
- Uses live reload, webserver: Vite http server, served location (not minified): ./index.html

**npm list** 
- Lists all npm packages and their versions

## Documentation

### Internal Documentation

https://github.com/condrici/limitless-gui/blob/main/documentation/configuration.md

### Vite 4.0

https://devdocs.io/vite~4/

### VueJS 3.x

How it Works

https://vuejs.org/guide/introduction.html
https://vuejs.org/guide/extras/rendering-mechanism

Template System
https://vuejs.org/guide/essentials/template-syntax
https://vuejs.org/guide/essentials/component-basics.html
https://vuejs.org/api/built-in-special-elements

### Tailwind 3.x

https://tailwindcss.com/docs/installation
