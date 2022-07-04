import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: '首页',
    component: () => import('~/pages/index.vue'),
  }],
})
app.use(router)
app.use(ArcoVue)
app.mount('#app')
