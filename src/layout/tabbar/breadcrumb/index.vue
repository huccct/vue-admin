<script setup lang="ts">
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  LayOutSettingStore.isCollapse = !LayOutSettingStore.isCollapse
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
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="vertical-align: middle">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0 5px; vertical-align: middle">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss" scoped></style>
