import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useGlobalStore } from '@/stores/global'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: () => import('../layouts/DefaultLayout.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
          // meta: {
          //   requiresAuth: true
          // }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to) => {
  const globalStore = useGlobalStore()
  globalStore.pathName = to.name

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!(await getCurrentUser())) {
      router.push('/login')
    }
  }
})

export default router
