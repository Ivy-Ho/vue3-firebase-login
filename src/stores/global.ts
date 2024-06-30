import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const fullscreenLoading = ref(false)

  return { fullscreenLoading }
})
