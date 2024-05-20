# Limitless GUI

Limitless GUI is one of the components of the Limitless Project that serves as a graphical interface.

Codebase: Vue 3 in Vite (Vite is a programatic API with full TypeScript typing).

## 1. Project Installation

The entire project installation must be triggered from the installation repository, which will install all components, including this one. During the project installation, the file under commands/install.sh will be executed.

Once the project is intalled, the docker environment can be initiated with the command: docker-compose up.

## 2. Project Files

**docker/dockerfiles/docker-entrypoint.sh** (commands that get executed when the docker environment starts)

**.env** (environment variables used within the Docker environment)

**vite.config.js** (Vite configuration file)

**package.json** (NPM project dependencies)

**src/** (Vite project files)

## 3. Project Commands

Some of the commands below will be triggered in the docker-entrypoint.sh file automatically when starting the Docker environment.

**npm install** (install NPM packages defined in package.json)

**npm run build** (build the application for production)

**npm run dev** (build the application for development)

## 4. Developer Notes

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Additional Resources

### Customizing Vite

See [Vite Configuration Reference](https://vitejs.dev/config/).
