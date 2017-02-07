// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './page/home.vue'
import signIn from './page/sign/signIn.vue'
import signUp from './page/sign/signUp.vue'
import setPassword from './page/sign/setPassword.vue'
import createStore from './page/sign/createStore.vue'
import {ToastPlugin} from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)

const routes = [
    { path: '/', component: Home },
    { path: '/signIn', component: signIn },
    { path: '/signUp', component: signUp },
    { path: '/setPassword', component: setPassword },
    { path: '/createStore', component: createStore }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
