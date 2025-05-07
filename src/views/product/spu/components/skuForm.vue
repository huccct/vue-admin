<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-28 11:47:41
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-29 16:27:31
-->
<script setup lang="ts">
import { reqAttr } from '@/api/product/attr'
import {
  reqSpuImageList,
  reqSpuHasSaleAttr,
  reqAddSku,
} from '@/api/product/spu'
import { ref, reactive } from 'vue'
import type { SkuData } from '@/api/product/spu/type'
let $emit = defineEmits(['changeScene'])
let attrArr = ref<any>([])
let saleArr = ref<any>([])
let imgArr = ref<any[]>([])
let table = ref<any>()
let selectedRow = ref<any>(null)
let skuParams = reactive<SkuData>({
  category3Id: '',
  spuId: '',
  tmId: '',
  skuName: '',
  price: '',
  weight: '',
  skuDesc: '',
  skuAttrValueList: [
    // {
    //   attrId: '',
    //   valueId: '',
    // },
  ],
  skuSaleAttrValueList: [
    // {
    //   saleAttrId: '',
    //   saleAttrValueId: '',
    // },
  ],
  skuDefaultImg: '',
})
const cancel = () => {
  $emit('changeScene', { flag: 0, params: '' })
}

const initSkuData = async (
  c1Id: number | string,
  c2Id: number | string,
  spu: any,
) => {
  // 重置数据
  attrArr.value = []
  saleArr.value = []
  imgArr.value = []
  selectedRow.value = null
  skuParams.category3Id = spu.category3Id
  skuParams.spuId = spu.id
  skuParams.tmId = spu.tmId
  skuParams.skuName = ''
  skuParams.price = ''
  skuParams.weight = ''
  skuParams.skuDesc = ''
  skuParams.skuAttrValueList = []
  skuParams.skuSaleAttrValueList = []
  skuParams.skuDefaultImg = ''

  let res: any = await reqAttr(c1Id, c2Id, spu.category3Id)
  let res1: any = await reqSpuHasSaleAttr(spu.id)
  let res2: any = await reqSpuImageList(spu.id)

  if (Array.isArray(res.data)) {
    attrArr.value = res.data
  }
  if (Array.isArray(res1.data)) {
    saleArr.value = res1.data
  }
  if (Array.isArray(res2.data)) {
    imgArr.value = res2.data
  }
}

const handler = (row: any) => {
  if (!Array.isArray(imgArr.value) || !table.value) return
  selectedRow.value = row
  skuParams.skuDefaultImg = row.imgUrl
}

const handleSelectionChange = (selection: any[]) => {
  if (selection.length > 0) {
    const row = selection[0]
    handler(row)
  }
}

const save = async () => {
  skuParams.skuAttrValueList = attrArr.value.reduce((prev: any, next: any) => {
    if (next.attrIdAndValueId) {
      let [attrId, valueId] = next.attrIdAndValueId.split(':')
      prev.push({
        attrId,
        valueId,
      })
    }
    return prev
  }, [])

  skuParams.skuSaleAttrValueList = saleArr.value.reduce(
    (prev: any, next: any) => {
      if (next.saleIdAndValueId) {
        let [saleAttrId, saleAttrValueId] = next.saleIdAndValueId.split(':')
        prev.push({
          saleAttrId,
          saleAttrValueId,
        })
      }
      return prev
    },
    [],
  )

  let res = await reqAddSku(skuParams)
  if (res.code === 200) {
    ElMessage({
      type: 'success',
      message: '添加SKU成功',
    })
    $emit('changeScene', { flag: 0, params: '' })
  } else {
    ElMessage({
      type: 'error',
      message: '添加SKU失败',
    })
  }
}
defineExpose({
  initSkuData,
})
</script>
<template>
  <el-form label-width="100px">
    <el-form-item label="SKU名称">
      <el-input placeholder="SKU名称" v-model="skuParams.skuName"></el-input>
    </el-form-item>
    <el-form-item label="价格(元)">
      <el-input
        placeholder="价格(元)"
        type="number"
        v-model="skuParams.price"
      ></el-input>
    </el-form-item>
    <el-form-item label="重量(g)">
      <el-input
        placeholder="重量(g)"
        type="number"
        v-model="skuParams.weight"
      ></el-input>
    </el-form-item>
    <el-form-item label="SKU描述">
      <el-input
        placeholder="SKU描述"
        type="textarea"
        v-model="skuParams.skuDesc"
      ></el-input>
    </el-form-item>
    <el-form-item label="平台属性">
      <el-form :inline="true" label-width="100px">
        <el-form-item
          :label="item.attrName"
          v-for="(item, index) in attrArr"
          :key="item.id"
        >
          <el-select v-model="item.attrIdAndValueId">
            <el-option
              :value="`${item.id}:${attrValue.id}`"
              :label="attrValue.valueName"
              v-for="(attrValue, index) in item.attrValueList"
              :key="attrValue.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <el-form-item label="销售属性">
      <el-form :inline="true">
        <el-form-item
          :label="item.saleAttrName"
          v-for="(item, index) in saleArr"
          :key="item.id"
        >
          <el-select v-model="item.saleIdAndValueId">
            <el-option
              :value="`${item.id}:${saleAttrValue.id}`"
              :label="saleAttrValue.saleAttrValueName"
              v-for="(saleAttrValue, index) in item.spuSaleAttrValueList"
              :key="saleAttrValue.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <el-form-item label="图片名称">
      <el-table
        border
        :data="imgArr"
        ref="table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="80px"
          align="center"
        ></el-table-column>
        <el-table-column label="图片">
          <template #default="{ row }">
            <img :src="row.imgUrl" alt="" style="width: 100px; height: 100px" />
          </template>
        </el-table-column>
        <el-table-column label="名称" prop="imgName"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button
              type="primary"
              size="small"
              @click="handler(row)"
              :disabled="selectedRow?.id === row.id"
            >
              {{ selectedRow?.id === row.id ? '已设为默认' : '设置默认' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="save">保存</el-button>
      <el-button size="default" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped></style>
