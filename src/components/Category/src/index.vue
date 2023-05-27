<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-25 22:51:11
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-26 22:33:41
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useCategoryStore from '@/store/modules/category'

let categoryStore = useCategoryStore()
onMounted(() => {
  getC1()
})

const getC1 = async () => {
  categoryStore.getC1()
}

const handler = (n: number) => {
  if (n === 1) {
    categoryStore.c2Id = ''
    categoryStore.c3Id = ''
    categoryStore.c3Arr = []
    categoryStore.getC2()
  } else if (n === 2) {
    categoryStore.c3Id = ''
    categoryStore.getC3()
  }
}

defineProps(['scene'])
</script>
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select
          :disabled="scene === 0 ? false : true"
          v-model="categoryStore.c1Id"
          @change="handler(1)"
        >
          <el-option
            v-for="(c1, index) in categoryStore.c1Arr"
            :key="c1.id"
            :label="c1.name"
            :value="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          :disabled="scene === 0 ? false : true"
          v-model="categoryStore.c2Id"
          @change="handler(2)"
        >
          <el-option
            v-for="(c2, index) in categoryStore.c2Arr"
            :key="c2.id"
            :label="c2.name"
            :value="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          :disabled="scene === 0 ? false : true"
          v-model="categoryStore.c3Id"
        >
          <el-option
            v-for="(c3, index) in categoryStore.c3Arr"
            :key="c3.id"
            :label="c3.name"
            :value="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<style lang="scss" scoped></style>
