<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:19:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-28 10:55:03
-->
<script setup lang="ts">
import { ref } from 'vue'

let scene = ref<number>(0)

let pageNo = ref<number>(1)
let pageSize = ref<number>(3)
</script>
<template>
  <def-category :scene="scene"></def-category>
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus">添加SPU</el-button>
    <el-table style="margin: 10px 0" border>
      <el-table-column
        label="序号"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column label="SPU名称"></el-table-column>
      <el-table-column label="SPU描述"></el-table-column>
      <el-table-column label="SPU操作"></el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 7, 9]"
      :background="true"
      layout="prev, pager, next, jumper, ->, sizes, total"
      :total="400"
    />
  </el-card>
</template>
<style lang="scss" scoped></style>
