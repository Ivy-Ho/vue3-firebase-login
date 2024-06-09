import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const fullscreenLoading = ref(false)
  const pathName: Ref<string | symbol | null | undefined> = ref(null)

  return { fullscreenLoading, pathName }
})
