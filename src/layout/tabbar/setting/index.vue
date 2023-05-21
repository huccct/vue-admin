<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-20 21:33:11
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-21 17:22:07
-->
<script setup lang="ts">
import {
  Refresh,
  Setting,
  FullScreen,
  ArrowDown,
} from '@element-plus/icons-vue'
</script>
<template>
  <el-button circle size="small" :icon="Refresh" />
  <el-button circle size="small" :icon="FullScreen" />
  <el-button circle size="small" :icon="Setting" />
  <img src="../../../assets/images/logo.jpg" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link" style="cursor: pointer">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
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
