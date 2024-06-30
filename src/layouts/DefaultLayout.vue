<script setup>
import DefaultNavbar from '@/layouts/components/DefaultNavbar.vue'

import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()
</script>

<template>
  <div
    v-loading.fullscreen.lock="globalStore.fullscreenLoading"
    element-loading-background="rgba(0, 0, 0, 0.4)"
    element-loading-text="loading..."
    class="flex h-screen"
  >
    <DefaultNavbar />
    <div class="m-auto">
      <router-view />
    </div>
  </div>
</template>
