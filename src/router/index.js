import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import HomeApp from 'module/home/App.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeApp
    }
  ]
})
