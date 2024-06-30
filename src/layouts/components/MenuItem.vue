<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <!-- one main route -->
      <el-menu-item @click="goRoute(item)" v-if="!item.children" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <!-- has children -->
      <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem :menuList="item.children"></MenuItem>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  menuList: Array
})

const goRoute = (path: any) => {
  router.push(path)
}
</script>

<style scoped></style>
