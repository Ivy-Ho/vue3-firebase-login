<template>
  <div class="container m-auto w-[350px]">
    <h1 class="mb-5 text-center text-3xl font-bold text-gray-700">Login</h1>

    <el-form ref="formRef" :model="form">
      <el-form-item
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: 'blur'
          }
        ]"
      >
        <el-input placeholder="Email address" v-model="form.email" />
      </el-form-item>
      <el-form-item
        prop="password"
        :rules="[
          {
            required: true,
            message: 'Please input password',
            trigger: 'blur'
          },
          {
            required: true,
            min: 6,
            message: 'Password must be at least 6 characters',
            trigger: 'change'
          }
        ]"
      >
        <el-input
          type="password"
          placeholder="Password"
          autocomplete="off"
          v-model="form.password"
          show-password
        />
      </el-form-item>
    </el-form>

    <div class="mt-10">
      <el-button type="primary" @click="handleLogin(formRef)" class="mb-2 w-full">Login</el-button>
      <el-button class="w-full" @click="userStore.signInWithGoogle">
        <img src="/icons/google.webp" class="mr-3 w-5" alt="google icon" />
        <span>Continue with Google</span>
      </el-button>
      <p class="mt-3 text-center text-sm text-gray-400">
        Don't have an account?
        <router-link to="/register" custom v-slot="{ navigate }">
          <el-link type="primary" @click="navigate">Signup</el-link>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useRouter } from 'vue-router'
const router = useRouter()

import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()

const formRef = ref<FormInstance>()
const form = ref({
  email: '',
  password: ''
})

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate()
  const auth = getAuth()
  signInWithEmailAndPassword(auth, form.value.email, form.value.password)
    .then((data) => {
      console.log(auth.currentUser)

      router.push('/')
    })
    .catch((err) => {
      switch (err.code) {
        case 'auth/invalid-email':
          alert('Invalid email')
          break
        case 'auth/user-not-found':
          alert('No account with that email was found')
          break
        case 'auth/wrong-password':
          alert('Incorrect password')
          break
        default:
          alert('Email or password was incorrect')
          break
      }
      // alert(err.message)
    })
}
</script>

<style scoped>
.el-button + .el-button {
  margin-left: 0;
}
</style>
