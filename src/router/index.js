import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '../views/Register.vue'
import List from '../views/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/registro',
      name: 'Register',
      component: Register
    },
    {
      path: '/lista',
      name: 'List',
      component: List
    }
  ]
})
