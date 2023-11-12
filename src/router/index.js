import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/MainPage.vue'),
      beforeEnter: (to, from, next) => {
        if (to.name !== 'Login' && localStorage.getItem('isLogin')===null) {
          next({ name: 'Login' })
        } else {
          next()
        }
      }
    }
  ]
})

export default router
