import Vue from 'vue'
import Router from 'vue-router'

import HomeApp from 'modules/home/App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeApp
    }
  ]
})
