<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:11:26
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-01 16:18:07
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqAllPermission } from '@/api/acl/menu'
import type {
  PermissionResponseData,
  PermissionList,
} from '@/api/acl/menu/type'

let PermissionArr = ref<PermissionList>([])

onMounted(() => {
  getHasPermission()
})

const getHasPermission = async () => {
  let res: PermissionResponseData = await reqAllPermission()
  if (res.code === 200) {
    PermissionArr.value = res.data
  }
}
</script>
<template>
  <el-table
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    border
    :data="PermissionArr"
  >
    <el-table-column prop="name" label="名称" />
    <el-table-column prop="code" label="权限值" />
    <el-table-column prop="updateTime" label="修改时间" />
    <el-table-column label="操作">
      <template #="{ row, $index }">
        <el-button size="small" :disabled="row.level === 4 ? true : false">
          {{ row.level === 3 ? '添加功能' : '添加菜单' }}
        </el-button>
        <el-button
          type="primary"
          size="small"
          :disabled="row.level === 1 ? true : false"
        >
          编辑
        </el-button>
        <el-button
          type="danger"
          size="small"
          :disabled="row.level === 1 ? true : false"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss" scoped></style>
