// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import routerConfig from './router-config'
import {ToastPlugin} from 'vux'
import  { LoadingPlugin } from 'vux'
import Utils from './assets/js/util'
import store from './store.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)


// 定义一个全局方法，将这个方法挂载到Vue上
Vue.prototype.utils = Utils

Vue.prototype.showInfo = function (text, onHide) {
    this.$vux.toast.show({
        text: text,
        type: 'text',
        onHide (){
            onHide ? onHide(): '';
        }
    })
}

Vue.prototype.loading = function (text) {
    let seft = this;
    this.$vux.loading.show({
        text: text || '正在加载'
    })
    this.$router.beforeEach( (to, from, next) => {
        seft.$vux.loading.hide();
        next();
    })
}

const router = new VueRouter({
  routes : routerConfig
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
   store,
  render: h => h(App)
}).$mount('#app')
