import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './utils/electron'
import './main.css'
import 'uno.css'
import 'iconify-icon'

import { basePath, isElectron } from './env'
import routes from '~pages'

const app = createApp(App)

const router = createRouter({
  history: process.env.NODE_ENV === 'production' ? '/icones/' : isElectron ? createWebHashHistory(basePath) : createWebHistory(basePath),
  routes,
})

app.use(router)
app.mount('#app')
