<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<template>
  <el-header style="text-align: right; font-size: 12px">
    <div class="toolbar">
      <div class="toolbar_left">
        <BreadCrumb />
      </div>
      <div class="toolbar_right">
        <Setting />
      </div>
    </div>
  </el-header>
</template>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .toolbar_left {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .toolbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
