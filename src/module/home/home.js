/**
 * Created by PengLunJian on 2017-4-26.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HomeApp from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeApp
    }
  ]
})

new Vue({
  router: router
}).$mount('.home_page')
