import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Posts from '@/components/Posts/Posts'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/posts'
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'PostDetail',
      component: Posts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
