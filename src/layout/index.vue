<script setup lang="ts">
import Logo from './logo/index.vue'
import TabBar from './tabbar/index.vue'
import { Setting } from '@element-plus/icons-vue'
import { computed, ref, toRef } from 'vue'
import useUserStore from '@/store/modules/user'
import userLayOutSettingStore from '@/store/modules/setting'
let useStore = useUserStore()
let LayOutSettingStore = userLayOutSettingStore()
</script>
<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside
      width="200px"
      :class="{ isCollapse: LayOutSettingStore.isCollapse ? true : false }"
    >
      <el-scrollbar>
        <el-menu
          :default-openeds="['1', '3']"
          active-text-color="#fff"
          background-color="#001529"
          text-color="#959ea6"
          :collapse="LayOutSettingStore.isCollapse"
        >
          <el-menu-item index="1">
            <Logo />
          </el-menu-item>
          <el-menu-item index="2">首页</el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon style="margin-right: 15px"><setting /></el-icon>
              组件
            </template>
            <el-menu-item index="3-1">1</el-menu-item>
            <el-menu-item index="3-2">1</el-menu-item>
            <el-menu-item index="3-3">1</el-menu-item>
            <el-menu-item index="3-4">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>功能</template>
            <el-menu-item index="4-1">1</el-menu-item>
            <el-menu-item index="4-2">1</el-menu-item>
            <el-menu-item index="4-3">1</el-menu-item>
            <el-menu-item index="4-4">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>外部页面</template>
            <el-menu-item index="5-1">1</el-menu-item>
            <el-menu-item index="5-2">1</el-menu-item>
            <el-menu-item index="5-3">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>多级菜单</template>
            <el-menu-item index="6-1">1</el-menu-item>
            <el-menu-item index="6-2">1</el-menu-item>
            <el-menu-item index="6-3">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7">
            <template #title>结果页面</template>
            <el-menu-item index="7-1">1</el-menu-item>
            <el-menu-item index="7-2">1</el-menu-item>
            <el-menu-item index="7-3">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="8">
            <template #title>异常页面</template>
            <el-menu-item index="8-1">1</el-menu-item>
            <el-menu-item index="8-2">1</el-menu-item>
            <el-menu-item index="8-3">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>列表页</template>
            <el-menu-item index="9-1">1</el-menu-item>
            <el-menu-item index="9-2">1</el-menu-item>
            <el-menu-item index="9-3">1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="10">
            <template #title>列表页</template>
            <el-menu-item index="10-1">1</el-menu-item>
            <el-menu-item index="10-2">1</el-menu-item>
            <el-menu-item index="10-3">1</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <TabBar style="width: 100%" />
      <el-main><h1>123123123123</h1></el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}

.el-aside {
  background-color: #001529 !important;
  transition: all 0.3s;
}
.el-header {
  background-color: #fff !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
.isCollapse {
  width: 56px;
}
</style>
