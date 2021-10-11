import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administración',
    name: 'administración',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administración.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/galeria.vue')
  },
  {
    path: '/listadoreservas',
    name: 'listadoreservas',
    component: () => import(/* webpackChunkName: "about" */ '../views/listadoreservas.vue')
  },
  {
    path: '/reserva',
    name: 'reserva',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reserva.vue')
  },
  {
    path: '/resumen',
    name: 'resumen',
    component: () => import(/* webpackChunkName: "about" */ '../views/resumen.vue')
  },

  {
    path: '/consulta',
    name: 'consulta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta.vue')
  },

  {
    path: '/tarifa',
    name: 'tarifa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tarifas.vue')
  },






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
