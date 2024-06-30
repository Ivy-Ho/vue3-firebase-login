<template>
  <nav class="flex items-center justify-between px-5 py-6">
    <!-- breadcrumb -->

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        {{ $router.currentRoute.value.name }}
      </el-breadcrumb-item>
      <!-- <el-breadcrumb-item>
        <a href="/">item one</a>
      </el-breadcrumb-item> -->
      <!-- <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
    </el-breadcrumb>
    <div class="flex items-center gap-4"></div>
    <div class="flex items-center">
      <!-- user info -->
      <div v-if="userStore.isLoggedIn" class="flex items-center gap-2">
        <!-- user photo -->
        <div
          class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-300"
        >
          <img
            v-if="userStore.userInfo.photoURL"
            class="rounded-full"
            :src="userStore.userInfo.photoURL"
            alt="user photo"
          />
          <el-icon v-else><UserFilled /></el-icon>
        </div>
        <!-- user display name -->
        <button
          type="button"
          @click="logoutMenuVisibility = !logoutMenuVisibility"
          class="relative flex items-center space-x-[5px] rounded-full hover:bg-gray-50 hover:bg-opacity-5"
        >
          <p class="text-lg" v-if="userStore.userInfo.displayName">
            {{ userStore.userInfo.displayName }}
          </p>
          <p v-else>admin</p>
          <el-icon><ArrowDownBold /></el-icon>
          <!-- dropdown menu -->
          <div
            v-show="logoutMenuVisibility"
            class="absolute right-0 top-6 z-20 w-[100px] rounded-md bg-white p-3 text-black shadow-md transition-opacity delay-100 duration-300 ease-in-out"
          >
            <!-- logout btn -->
            <div
              @click="handleSignOut"
              class="no-select flex w-full cursor-pointer items-center px-3 py-1 text-center hover:bg-gray-100"
            >
              Logout
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- click to close dropdown menu -->
    <div
      v-show="logoutMenuVisibility"
      @click="logoutMenuVisibility = false"
      class="fixed bottom-0 left-0 right-0 top-0 z-10"
    ></div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import { ref } from 'vue'

import { signOut, getAuth } from 'firebase/auth'

import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()

import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()

const handleSignOut = () => {
  globalStore.fullscreenLoading = true
  signOut(getAuth()).then(() => {
    globalStore.fullscreenLoading = false
    router.push('/login')
  })
}

const logoutMenuVisibility = ref(false)
</script>

<style scoped></style>
