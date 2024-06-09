<template>
  <router-view></router-view>
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
