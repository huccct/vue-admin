<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 14:32:02
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-17 21:17:53
-->
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'

const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <h1>测试代码</h1>
  </el-config-provider>
</template>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
