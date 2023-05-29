<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:19:04
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-29 19:54:24
-->
<script setup lang="ts">
import { ref } from 'vue'
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
</script>
<template>
  <el-card>
    <el-table border style="margin: 10px 0">
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column
        label="名称"
        show-overflow-tooltip
        width="150px"
      ></el-table-column>
      <el-table-column
        label="描述"
        show-overflow-tooltip
        width="150px"
      ></el-table-column>
      <el-table-column label="图片" width="150px"></el-table-column>
      <el-table-column
        label="重量(g)"
        show-overflow-tooltip
        width="150px"
      ></el-table-column>
      <el-table-column
        label="价格(元)"
        show-overflow-tooltip
        width="150px"
      ></el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        show-overflow-tooltip
        width="250px"
      ></el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :background="true"
      layout="prev, pager, next, jumper,->,sizes, total,"
      :total="400"
    />
  </el-card>
</template>
<style lang="scss" scoped></style>
