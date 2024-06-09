import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import type { User } from '@/stores/modules/types/type'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const isLoggedIn = ref(false)

  const userInfo: User = ref({
    displayName: '',
    photoURL: '',
    email: '',
    uid: ''
  })

  const getLoggedInState = () => {
    onAuthStateChanged(getAuth(), (user) => {
      isLoggedIn.value = user ? true : false
      console.log('user', user)
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

  return { isLoggedIn, getLoggedInState, userInfo, signInWithGoogle }
})
