import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from '~/components'

import './mock'

import '@arco-design/web-vue/dist/arco.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.use(ArcoVueIcon)
app.use(router)
app.use(store)
app.use(globalComponents)
app.mount('#app')
