import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import vuetify from './plugins/vuetify';
import './custom.css'
import './custom.js'
import './assets/roboto-font.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { configureFakeBackend } from './router';
configureFakeBackend();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
