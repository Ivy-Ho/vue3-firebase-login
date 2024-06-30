<template>
  <div
    v-loading.fullscreen.lock="globalStore.fullscreenLoading"
    element-loading-background="rgba(0, 0, 0, 0.4)"
    element-loading-text="loading..."
    class="flex h-screen"
  >
    <SideMenu />
    <div class="flex-grow">
      <DashboardNavbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import DashboardNavbar from '@/layouts/components/DashboardNavbar.vue'
import SideMenu from '@/layouts/components/SideMenu.vue'

import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()
</script>
