import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import http from './plugins/http'
import VueCookies from 'vue-cookies-ts'
import router from './router/index.js'
import ElementUI from 'element-ui'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)
Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
