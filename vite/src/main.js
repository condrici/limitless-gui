import { createApp } from 'vue'
import App from './App.vue'

// CSS
import './assets/tailwind.css'

import {http, apiEndpoints} from './features/Http';
import TestComponent from './components/TestComponent.vue'

const app = createApp(App)
app.mount('#app')