# Limitless GUI

## Vue JS Getting Started
- A VueJS module is a simple JS file that you can import

## Files and Folders
- **index.html** application entrypoint
- **main.js** file contains the JavaScript to initialise a Vue app (file is loaded in index.html)
- **App.vue** file contains the root component of a Vue app (file is loaded in main.js)
- **/dist** folder is where build folder containing script and asset files

## Vue JS Terminology
- **Root component** is the object that we pass into createAapp(**here**)
- **SFC** (single file components) are files that have the .vue file extension; these files encapsulate HTML, CSS and JavaScript
- **Options API** is the first API style (object of options such as data, methods, and mounted). The Options API is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details.
- **Composition API** is the other API style (<script setup\>, we define a component\'s logic using imported API functions). The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.
- What API style to use in production: **Options API** if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement. **Composition API + Single-File Components** if you plan to build full applications with Vue.
- **Usages**: [1] Enhancing static HTML without a build step [2] Embedding as Web Components on any page [3] Single-Page Application (SPA) [4] Fullstack / Server-Side Rendering (SSR) [5] Jamstack / Static Site Generation (SSG) [6] Targeting desktop, mobile, WebGL, and even the terminal

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

## Code Structuring
- The template for the root component is usually part of the component itself, but it is also possible to provide the template separately by writing it directly inside the mount container. Vue will automatically use the container's innerHTML as the template if the root component does not already have a template option.

## VueJS Topics
- Configuring an application (ex: app.config.errorHandler)