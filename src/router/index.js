import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/home/Home")
  },
  {
    path: '/home2',
    name: 'Home',
    component: () => import('../views/home/Home2.vue')
  },
  {
    path: '/home3',
    name: 'Home3',
    component: () => import('../views/home/Home3.vue')
  },
  {
    path: '/home4',
    name: 'Home4',
    component: () => import('../views/home/Home4.vue')
  },
  {
    path: '/service',
    name:"Service",
    component: () => import('../views/Service.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
