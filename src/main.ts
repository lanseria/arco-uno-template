import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from '~/components'

import './mock'
import '~/api/interceptor'

import '@arco-design/web-vue/dist/arco.css'
import '@unocss/reset/tailwind.css'
import '~/assets/style/global.less'
import 'uno.css'

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(globalComponents)
app.mount('#app')
