import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/Adaptive'
  },
  {
    path: '/redact',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Exhibition',
    name: 'Exhibition',
    component: () => import('../views/Exhibition.vue')
  },
  {
    path: '/Adaptive',
    name: 'Adaptive',
    component: () => import('../views/Adaptive.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
