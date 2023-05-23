<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-20 21:33:11
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-22 21:28:31
-->
<script setup lang="ts">
import {
  Refresh,
  Setting,
  FullScreen,
  ArrowDown,
} from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let layoutSettingStore = useLayOutSettingStore()
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
let $router = useRouter()
let $route = useRoute()
let userStore = useUserStore()
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logout = () => {
  userStore.userLogout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>
<template>
  <el-button circle size="small" :icon="Refresh" @click="updateRefsh" />
  <el-button circle size="small" :icon="FullScreen" @click="fullScreen" />
  <el-button circle size="small" :icon="Setting" />
  <img :src="userStore.avatar" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link" style="cursor: pointer">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="scss" scoped>
img {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  margin: 0 10px;
}
</style>
