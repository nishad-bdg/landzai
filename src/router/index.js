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
    name: 'Home2',
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
    name: "Service",
    component: () => import('../views/Service.vue')
  },
  {
    path: '/about',
    name: "About",
    component: () => import('../views/About.vue')
  },
  {
    path: '/apply-form',
    name: "ApplyForm",
    component: () => import('../views/ApplyForm.vue')
  },
  {
    path: '/blog-grid',
    name: "BlogGrid",
    component: () => import('../views/blog/BlogGrid.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
