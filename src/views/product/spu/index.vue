<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:19:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-28 22:43:43
-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import useCategoryStore from '@/store/modules/category'
import { reqHasSpu } from '@/api/product/spu'
import type {
  HasSpuResponseData,
  Records,
  SpuData,
} from '@/api/product/spu/type'
import SpuForm from './components/spuForm.vue'
import SkuForm from './components/skuForm.vue'
let categoryStore = useCategoryStore()
let scene = ref<number>(0)

let pageNo = ref<number>(1)
let pageSize = ref<number>(3)

let records = ref<Records>([])
let total = ref<number>(0)
let spu = ref<any>()

watch(
  () => categoryStore.c3Id,
  () => {
    if (!categoryStore.c3Id) return
    getHasSpu()
  },
)

const getHasSpu = async (pager = 1) => {
  pageNo.value = pager
  let res: HasSpuResponseData = await reqHasSpu(
    pageNo.value,
    pageSize.value,
    categoryStore.c3Id,
  )
  if (res.code === 200) {
    records.value = res.data.records
    total.value = res.data.total
  }
}

const changeSize = () => {
  getHasSpu()
}

const addSpu = () => {
  scene.value = 1
  spu.value.initAddSpu(categoryStore.c3Id)
}

const changeScene = (obj: any) => {
  scene.value = obj.flag
  if (obj.params == 'update') {
    //更新留在当前页
    getHasSpu(pageNo.value)
  } else {
    //添加留在第一页
    getHasSpu()
  }
}

const updateSpu = (row: SpuData) => {
  scene.value = 1
  spu.value.initHasSpuData(row)
}
</script>
<template>
  <def-category :scene="scene"></def-category>
  <el-card style="margin: 10px 0">
    <div v-show="scene === 0">
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        :disabled="categoryStore.c3Id ? false : true"
        @click="addSpu"
      >
        添加SPU
      </el-button>
      <el-table style="margin: 10px 0" border :data="records">
        <el-table-column
          label="序号"
          align="center"
          width="80px"
          type="index"
        ></el-table-column>
        <el-table-column label="SPU名称" prop="spuName"></el-table-column>
        <el-table-column
          label="SPU描述"
          prop="description"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="SPU操作">
          <template #="{ row, $index }">
            <el-button icon="Plus" title="添加SKU" size="small"></el-button>
            <el-button
              type="primary"
              icon="Edit"
              title="修改SPU"
              size="small"
              @click="updateSpu(row)"
            ></el-button>
            <el-button
              type="info"
              icon="View"
              title="查看SKU列表"
              size="small"
            ></el-button>
            <el-button
              type="danger"
              icon="Delete"
              title="删除SPU"
              size="small"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
        @current-change="getHasSpu"
        @size-change="changeSize"
      />
    </div>
    <SpuForm
      ref="spu"
      v-show="scene === 1"
      @changeScene="changeScene"
    ></SpuForm>
    <SkuForm ref="sku" v-show="scene === 2"></SkuForm>
  </el-card>
</template>
<style lang="scss" scoped></style>
