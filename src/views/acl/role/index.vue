<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:11:08
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-31 21:28:03
-->
<script setup lang="ts">
import { ref } from 'vue'

let pageNo = ref<number>(1)

let pageSize = ref<number>(10)
</script>
<template>
  <el-card style="height: 80px">
    <el-form :inline="true" class="form">
      <el-form-item label="职位搜索">
        <el-input placeholder="请你输入搜索职位的关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus">添加职位</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column type="index" align="center" label="#"></el-table-column>
      <el-table-column label="ID" align="center"></el-table-column>
      <el-table-column
        label="职位名称"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="创建时间"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="更新时间"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="操作"
        width="260px"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="prev, pager, next, jumper , ->, sizes, total, "
      :total="400"
    />
  </el-card>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
