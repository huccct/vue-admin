<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:18:38
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-25 22:55:40
-->
<script setup lang="ts"></script>
<template>
  <def-category />
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus">
      添加平台属性
    </el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column label="属性名称"></el-table-column>
      <el-table-column label="属性值名称"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>
<style lang="scss" scoped></style>
