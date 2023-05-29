<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:19:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-29 19:30:22
-->
<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import useCategoryStore from '@/store/modules/category'
import { reqHasSpu, reqSkuList } from '@/api/product/spu'
import type {
  HasSpuResponseData,
  Records,
  SkuInfoData,
  SpuData,
} from '@/api/product/spu/type'
import SpuForm from './components/spuForm.vue'
import SkuForm from './components/skuForm.vue'
import { SkuData } from '@/api/product/spu/type'
import { reqRemoveAttr } from '@/api/product/attr'
let categoryStore = useCategoryStore()
let scene = ref<number>(0)

let pageNo = ref<number>(1)
let pageSize = ref<number>(3)

let records = ref<Records>([])
let total = ref<number>(0)
let spu = ref<any>()
let sku = ref<any>()
let skuArr = ref<SkuData[]>([])
let show = ref<boolean>(false)
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

const addSku = (row: SpuData) => {
  scene.value = 2
  sku.value.initSkuData(categoryStore.c1Id, categoryStore.c2Id, row)
}

const findSku = async (row: SpuData) => {
  let res: SkuInfoData = await reqSkuList(row.id as number)
  if (res.code === 200) {
    skuArr.value = res.data
    show.value = true
  }
}

const deleteSpu = async (row: SpuData) => {
  let res: any = await reqRemoveAttr(row.id as number)

  if (res.code === 200) {
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
    getHasSpu(records.value.length > 1 ? pageNo.value : pageNo.value - 1)
  } else {
    ElMessage({
      type: 'error',
      message: '删除失败',
    })
  }
}

onBeforeUnmount(() => {
  categoryStore.$reset()
})
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
            <el-button
              icon="Plus"
              title="添加SKU"
              size="small"
              @click="addSku(row)"
            ></el-button>
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
              @click="findSku(row)"
            ></el-button>
            <el-popconfirm
              :title="`你确定删除${row.spuName}?`"
              width="200px"
              @confirm="deleteSpu(row)"
            >
              <template #reference>
                <el-button
                  type="danger"
                  icon="Delete"
                  title="删除SPU"
                  size="small"
                ></el-button>
              </template>
            </el-popconfirm>
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
    <SkuForm
      ref="sku"
      v-show="scene === 2"
      @changeScene="changeScene"
    ></SkuForm>
    <el-dialog v-model="show" title="SKU列表">
      <el-table :data="skuArr">
        <el-table-column label="SKU名字" prop="skuName"></el-table-column>
        <el-table-column label="SKU价格" prop="price"></el-table-column>
        <el-table-column label="SKU重量" prop="weight"></el-table-column>
        <el-table-column label="SKU图片">
          <template #="{ row, $index }">
            <img
              :src="row.skuDefaultImg"
              alt=""
              style="width: 100px; height: 100px"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </el-card>
</template>
<style lang="scss" scoped></style>
