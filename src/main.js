import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import vuetify from './plugins/vuetify';
import './custom.js'
import './assets/roboto-font.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
