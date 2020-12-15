import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
import $ from 'jquery'
import './custom.css'
import './custom.js'
import './assets/roboto-font.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueHtmlToPaper from 'vue-html-to-paper'
import 'print-js'
// const options = {
//   name: '_blank',
//   specs: [
//     'fullscreen=yes',
//     'titlebar=yes',
//     'scrollbars=yes'
//   ],
//   styles: [
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://unpkg.com/kidlat-css/css/kidlat.css',
//     './print.css'
//   ]
// }

// Vue.use(VueHtmlToPaper, options);
Vue.use(VueHtmlToPaper);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.silent = true
// var $ = global.$;
window.$ = $;

import { configureFakeBackend } from './router';
configureFakeBackend();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
