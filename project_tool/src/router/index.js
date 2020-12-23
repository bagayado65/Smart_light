import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/template',
    name: 'Template',
    component: () => import('../views/Tem_1.vue')
  },
  {
    path:'/template2',
    name: 'Template2',
    component: () => import('../views/Tem_2.vue')
  },
  {
    path: '/template3',
    name: 'Template3',
    component: () => import('../views/Tem_3.vue')
  },
  {
    path: '/template4',
    name: 'Template4',
    component: () => import('../views/Tem_4.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
