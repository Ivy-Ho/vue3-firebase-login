<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'

import { onBeforeMount } from 'vue'

import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()

onBeforeMount(() => {
  userStore.getLoggedInState()
})
</script>
<style lang="scss" scoped>
.box {
  h1 {
    color: red;
  }
}
</style>
