import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import type { User } from '@/stores/modules/types/type'
import { useRouter, type RouteRecordRaw } from 'vue-router'

import { constantRoute } from '@/router/routes'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const isLoggedIn = ref(false)

  const userInfo: Ref<User> = ref({
    displayName: '',
    photoURL: '',
    email: '',
    uid: ''
  })

  const getLoggedInState = () => {
    onAuthStateChanged(getAuth(), (user) => {
      isLoggedIn.value = user ? true : false
      if (user) {
        isLoggedIn.value = true

        const { displayName, photoURL, email, uid } = user
        userInfo.value = {
          displayName,
          photoURL,
          email,
          uid
        }
      }
    })
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
      .then((res) => {
        getLoggedInState()

        router.push('/')
      })
      .catch((err) => {
        console.log(err.code)
      })
  }

  const menuRoutes: Array<RouteRecordRaw> = constantRoute

  return { isLoggedIn, getLoggedInState, userInfo, signInWithGoogle, menuRoutes }
})
