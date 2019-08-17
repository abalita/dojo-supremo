import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import './plugins/ant-design-vue.js'

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window)

console.log(`default baseURL ::: ${process.env.VUE_APP_BASE_URI}`)
axios.defaults.baseURL=process.env.VUE_APP_BASE_URI
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
