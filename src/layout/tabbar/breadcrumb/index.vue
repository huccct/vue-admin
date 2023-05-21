<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import userLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = userLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
  // console.log(LayOutSettingStore.isCollapse)
}
</script>
<template>
  <el-icon
    style="margin-right: 10px; cursor: pointer"
    size="20px"
    @click="changeIcon"
  >
    <component :is="LayOutSettingStore.isCollapse ? Expand : Fold"></component>
  </el-icon>
  <el-breadcrumb separator="/" :separator-icon="ArrowRight">
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss" scoped></style>
