<template>
  <p v-if="userStore.isLoggedIn" class="text-center text-xl text-violet-500">Welcome!</p>
  <p v-else class="text-center text-xl text-violet-500">Welcome! Please Login.</p>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()
</script>
