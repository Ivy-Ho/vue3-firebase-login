<template>
  <div class="container m-auto w-[350px]">
    <h1 class="mb-5 text-center text-3xl font-bold text-gray-700">Create an Account</h1>

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
      <el-button type="primary" @click="register" class="mb-2 w-full">Register</el-button>
      <p class="mt-3 text-center text-sm text-gray-400">
        Already have an account?
        <router-link to="/login" custom v-slot="{ navigate }">
          <el-link type="primary" @click="navigate">Login</el-link>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { useRouter } from 'vue-router'
const router = useRouter()

const formRef = ref(null)
const form = ref({
  email: '',
  password: ''
})

const register = async () => {
  await formRef.value.validate()
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, form.value.email, form.value.password)
    .then((data) => {
      console.log('Successfully register!')
      console.log(auth.currentUser)
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      alert(err.message)
    })
}
</script>

<style scoped></style>
