import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import New from './views/New.vue'
import Second from './views/Second.vue'
import Shop from './views/Shop.vue'
import Dynamic from './views/Dynamic.vue'
import Our from './views/Our.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
   
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
    {
      path: '/our',
      name: 'our',
      component: Our
    }
  ]
})
