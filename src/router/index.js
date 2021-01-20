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
  {
    path: '/blog-left',
    name: "BlogLeft",
    component: () => import('../views/blog/BlogLeft.vue')
  },
  {
    path: '/blog-right',
    name: "BlogRight",
    component: () => import('../views/blog/BlogRight.vue')
  },
  {
    path: '/career',
    name: "Career",
    component: () => import('../views/career/Career.vue')
  },
  {
    path: '/career-details',
    name: "CareerDetails",
    component: () => import('../views/career/CareerDetails.vue')
  },
  {
    path: '/cart',
    name: "Cart",
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/checkout',
    name: "Checkout",
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/contact',
    name: "Contact",
    component: () => import('../views/contact/Contact.vue')
  },
  {
    path: '/contact2',
    name: "Contact2",
    component: () => import('../views/contact/Contact2.vue')
  },
  {
    path: '/contact3',
    name: "Contact3",
    component: () => import('../views/contact/Contact3.vue')
  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '/register2',
    name: "Register2",
    component: () => import('../views/register/Register2.vue')
  },
  {
    path: '/register3',
    name: "Register3",
    component: () => import('../views/register/Register3.vue')
  },
  {
    path: '/shop-grid',
    name: "ShopGrid",
    component: () => import('../views/shop_grid/ShopGrid.vue')
  },
  {
    path: '/shop-grid-sidebar',
    name: "ShopGridSidebar",
    component: () => import('../views/shop_grid/ShopGridSidebar.vue')
  },
  {
    path: '/shop-list',
    name: "ShopList",
    component: () => import('../views/shop_list/ShopList.vue')
  },
  {
    path: '/shop-list-sidebar',
    name: "ShopListSide",
    component: () => import('../views/shop_list/ShopListSide.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
