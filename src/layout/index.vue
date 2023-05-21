<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import TabBar from './tabbar/index.vue'
import { Setting } from '@element-plus/icons-vue'
import userLayOutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
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
          <Logo />
          <Menu :menuList="userStore.menuRoutes" />
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
