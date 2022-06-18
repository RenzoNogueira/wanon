import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.min'
window.bootstrap = bootstrap

// Popper
import '@popperjs/core/dist/umd/popper.js'

// Jquery
const $ = require('jquery')
window.$ = $

createApp(App).use(router).mount('#app')
