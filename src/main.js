import Vue from 'vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './app'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: __dirname
})

const app = new Vue({
  router,
  render:h => h(App)
}).$mount('#app')
