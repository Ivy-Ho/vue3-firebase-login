<template>
  <div class="container px-5">
    <p class="text-center">Welcome!</p>
    <p class="text-center text-xl text-violet-500" v-if="userStore.userInfo.displayName">
      {{ userStore.userInfo.displayName }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()
</script>
