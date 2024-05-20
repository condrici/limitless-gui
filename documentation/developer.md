# Limitless GUI

## Important Concepts
- ViteJS is a front-end framework (not backend like NodeJS) based on JavaScript, but it also support server-side rendering
- Main configuraiton file is vite.config.js
- main.js is the JavaScript entrypoint of the application
- Vite supports only ECMAScript modules (import/export), not CommonJS like NodeJS (require); dependency pre-bundling is needed for such modules
- Vite supports using ES modules syntax in the config file even if the project is not using native Node ESM
- Vite ships with TypeScript typings, so you can leverage your IDE's intellisense with jsdoc type hints
- import() is supported in CommonJS (client-side), require() is supported in NodeJS (server-side)

Dependency Pre-Bundling
- Vite prebundles your project dependencies before loading your site locally
- During development, Vite's dev serves all code as native ESM. Therefore, Vite must convert dependencies that are shipped as CommonJS or UMD into ESM first.

JavaScript Module System
- NodeJS distinguishes modules by checking the file extension:  .js (CommonJS), .mjs (ECMAScript)
- ViteJS distinguishes modules by pre-bundling which distinguishes between CommonJS and ECMAScript modules
- Every module can have two export types: named, default

Important File Extensions
- .cjs are CommonJS modules for NodeJS
- .mjs files are ECMAScript modules in NodeJS
- .mts files are TypeScript ECMAScript modules in NodeJS
- .cts files are TypeScript CommonJS modules in NodeJS
- .d.mts and .d.cts are TypeScript declaration files

## Suggested Vite Reading List
- Getting Started: https://vuejs.org/guide/introduction.html
- Configuration: https://vitejs.dev/config/
- Plugin API: https://vitejs.dev/guide/api-plugin.html 

## Files and Folders
- **index.html** application entrypoint
- **main.js** file contains the JavaScript to initialise a Vue app (file is loaded in index.html)
- **App.vue** file contains the root component of a Vue app (file is loaded in main.js)
- **/dist** folder is where build folder containing script and asset files

## Configuration
- Env variable files: .env, .env.local, .env.[mode], .env.[mode].local
- Constants defined in .env should be prefixed with VUE_APP_ or VITE_ if Vite is installed
- Constant values can be retrieved with import.meta.env.VITE_SOMETHING (for Vite) or process.env.VUE_APP_SOMETHING (VueJS woithout Vite)
- If Vite is installed, there is an additional configuration file vite.config.js inside the project root
- 

## Vue JS Terminology
- **Root component** is the object that we pass into createAapp(**here**)
- **SFC** (single file components) are files that have the .vue file extension; these files encapsulate HTML, CSS and JavaScript
- **Options API** is the first API style (object of options such as data, methods, and mounted). The Options API is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details.
- **Composition API** is the other API style (<script setup\>, we define a component\'s logic using imported API functions). The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.
- What API style to use in production: **Options API** if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement. **Composition API + Single-File Components** if you plan to build full applications with Vue.
- **Reactivity** is the ability for a variable (array, string, number, object, etc) to update when its value or any other variable that it makes reference to is changed after declaration
- **Usages**: [1] Enhancing static HTML without a build step [2] Embedding as Web Components on any page [3] Single-Page Application (SPA) [4] Fullstack / Server-Side Rendering (SSR) [5] Jamstack / Static Site Generation (SSG) [6] Targeting desktop, mobile, WebGL, and even the terminal

## API Styles Syntax

### Composition API (recommended)

```
<script setup>
  import { ref, onMounted } from 'vue'
  
  // reactive state
  const count = ref(0)

  // functions that mutate state and trigger updates
  function increment() {
    count.value++
  }

  // lifecycle hooks
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### Options API (easier)

```
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

```



## Template Syntax
- **Output plain text**: {{ raw Html }} 
- **Output real HTML**: \<span v-html="rawHtml">
- **Directives** are prefixed with v-: \<p v-if="seen">Now you see me\</p>
- **Directives with Arguments**: \<a v-bind:href="url"> ... \</a>
- **Directives with Dynamic Arguments**: \<a v-bind:[attributeName]="url"> ... \</a>
- **Dynamic Argument Value Constraints**: they are expected to evaluate to a string, with the exception of null used to remove binding
- **Dynamic Argument Syntax Constraints**: certain characters, such as spaces and quotes, are invalid inside HTML attribute names
- **Attribute bindings** \<div v-bind:id="dynamicId">\<div>; shorthand: \<div :id="dynamicId">\</div>
- **Boolean Attributes**: \<button :disabled="isButtonDisabled">Button\</button>
- **Multiple Attribute Binding**: \<div v-bind="objectOfAttrs">\</div>; objectOfAttr object contains multiple variables
- **JavaScript Expressions**: {{ number + 1 }}, {{ ok ? 'YES' : 'NO' }}, {{ message.split('').reverse().join('') }}, \<div :id="`list-${id}`">\</div>
- **Expressions Only**, the following will not work: {{ var a = 1 }}, {{ if (ok) { return message } }}
- **Calling Functions**: \<time :title="toTitleDate(date)" :datetime="date">{{ formatDate(date) }}\</time>
- **Restricted Global Access**: template expressions are sandboxed and only have access to a restricted list of globals (such as Math, Date)
- **Modifiers**: special postfixes denoted by a dot \<form @submit.prevent="onSubmit">...\</form>

## Modes and Environment Variables
- Develpment Mode: vue-cli-service serve, vue-cli-service build --mode development
- Test Mode: vue-cli-service test:unit, vue-cli-service build --mode test
- Production Mode: vue-cli-service build, vue-cli-service test:e2e, vue-cli-service build --mode production
- Env variable files: .env, .env.local, .env.[mode], .env.[mode].local
- Using variables in the client side code: console.log(process.env.VUE_APP_NOT_SECRET_CODE)
- Note that only NODE_ENV, BASE_URL, and variables that start with VUE_APP_ will be statically embedded into the client bundle with webpack.DefinePlugin. It is to avoid accidentally exposing a private key on the machine that could have the same name
- Gitignore: local env files are ignored in .gitignore by default
- Read more: https://cli.vuejs.org/guide/mode-and-env.html

## Reactivity
- **Declare Reactive State**: ref() wraps the inner value in a special object - the recommended way, reactive() makes an object itself reactive
- **Deep Reactivity**: you can expect changes to be detected even when you mutate nested objects or arrays
- **DOM Update Timing**: DOM updates are not applied synchronously
- **Reactive Proxy vs. Original**: the returned value from reactive() is a Proxy of the original object
- **Limitations of reactive()**: limited value types, cannot replace entire object, not destructure-friendly
- Read More: https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity

## Code Structuring
- The template for the root component is usually part of the component itself, but it is also possible to provide the template separately by writing it directly inside the mount container. Vue will automatically use the container's innerHTML as the template if the root component does not already have a template option.

## VueJS Topics
- Configuring an application (ex: app.config.errorHandler)