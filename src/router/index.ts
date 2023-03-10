import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {top: 0, behavior: 'smooth'}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      beforeEnter: (to, from) => {
        if (window.innerWidth < 1000) {
          return {path: '/contact/old'}
        }
      },
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/contact/old',
      name: 'contactFallback',
      component: () => import('../views/ContactViewOld.vue'),
    },
    {
      path: '/cv',
      redirect: {name: 'contact'},
    },
    {
      path: '/cssgallery',
      name: 'css-gallery',
      component: () => import('../views/CSSGallery.vue'),
    },
    {
      path: '/wip',
      name: 'wip',
      component: () => import('../views/WIP.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
