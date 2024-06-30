<template>
  <div class="h-screen w-[280px] bg-[#545c64]">
    <h1 class="p-3 text-4xl font-medium italic text-white">Dashboard</h1>
    <el-menu
      active-text-color="#8b5cf6"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <MenuItem :menuList="userStore.menuRoutes[0].children" />
      <!-- <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>Home</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Lock /></el-icon>
          <span>Authentication</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item-group title="Group One">
          <el-menu-item index="2-1-1">item one</el-menu-item>
          <el-menu-item index="2-1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><TakeawayBox /></el-icon>
          <span>Products</span>
        </template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()

import MenuItem from '@/layouts/components/MenuItem.vue'
</script>
<style scoped>
:deep(.el-drawer.ltr) {
  background-color: #545c64;
}
:deep(.el-menu) {
  border-right: none;
}
</style>
