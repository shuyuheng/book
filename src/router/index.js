import Vue from 'vue'
import VueRouter from 'vue-router'
import Redact from '../views/Redact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Exhibition'
  },
  {
    path: '/redact',
    name: 'Redact',
    component: Redact,
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
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
