import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Sandbox from './Sandbox.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Sandbox
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
