import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/krisztian',
      name: 'krisztian',
      component: () => import('../views/Krisztian.vue')
    },
    {
      path: '/dorian',
      name: 'dorian',
      component: () => import('../views/Dorian.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
