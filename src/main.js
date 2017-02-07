// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router-config'
import {ToastPlugin} from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)

const router = new VueRouter({
  routes : routerConfig
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')