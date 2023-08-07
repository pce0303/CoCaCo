import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import profile from '@/components/profile'
import Home from '@/components/Home'
import post from '@/components/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/dashboard',
      component: Home
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/new-post',
      component: post
    }

  ]
})
