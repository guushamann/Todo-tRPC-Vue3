import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './assets/main.css'

createApp(App).use(VueQueryPlugin).mount('#app')
