<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:18:38
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-27 23:22:03
-->
<script setup lang="ts">
import useCategoryStore from '@/store/modules/category'
let categoryStore = useCategoryStore()
import { watch, ref, reactive, nextTick, onBeforeUnmount } from 'vue'
import { reqAttr, reqAddOrUpdateAttr, reqRemoveAttr } from '@/api/product/attr'
import type { AttrResponseData, Attr, AttrValue } from '@/api/product/attr/type'
let attrArr = ref<Attr[]>([])
let scene = ref<number>(0)
let flag = ref<boolean>(true)
let attrParams = reactive<Attr>({
  attrName: '',
  attrValueList: [],
  categoryId: '',
  categoryLevel: 3,
})

let inputArr = ref<any>([])

watch(
  () => categoryStore.c3Id,
  () => {
    attrArr.value = []
    if (!categoryStore.c3Id) return
    getAttr()
  },
)

const getAttr = async () => {
  const { c1Id, c2Id, c3Id } = categoryStore
  let res: AttrResponseData = await reqAttr(c1Id, c2Id, c3Id)
  if (res.code === 200) {
    attrArr.value = res.data
  }
}

const addAttr = () => {
  Object.assign(attrParams, {
    attrName: '',
    attrValueList: [],
    categoryId: categoryStore.c3Id,
    categoryLevel: 3,
  })
  scene.value = 1
}

const updateAttr = (row: Attr) => {
  scene.value = 1
  Object.assign(attrParams, JSON.parse(JSON.stringify(row)))
}

const cancel = () => {
  scene.value = 0
}

const addAttrValue = () => {
  attrParams.attrValueList.push({
    valueName: '',
    flag: true,
  })
  nextTick(() => {
    inputArr.value[attrParams.attrValueList.length - 1].focus()
  })
}

const save = async () => {
  let res: any = await reqAddOrUpdateAttr(attrParams)
  if (res.code === 200) {
    scene.value = 0
    ElMessage({
      type: 'success',
      message: attrParams.id ? '修改成功' : '添加成功',
    })
    getAttr()
  } else {
    ElMessage({
      type: 'error',
      message: attrParams.id ? '修改失败' : '添加失败',
    })
  }
}

const toLook = (row: AttrValue, $index: number) => {
  if (row.valueName.trim() === '') {
    attrParams.attrValueList.splice($index, 1)
    ElMessage({
      type: 'error',
      message: '属性值不能为空',
    })
    return
  }
  let repeat = attrParams.attrValueList.find((item) => {
    if (item !== row) {
      return item.valueName === row.valueName
    }
  })
  if (repeat) {
    attrParams.attrValueList.splice($index, 1)
    ElMessage({
      type: 'error',
      message: '属性值不能重复',
    })
    return
  }
  row.flag = false
}

const toEdit = (row: AttrValue, $index: number) => {
  row.flag = true
  nextTick(() => {
    inputArr.value[$index].focus()
  })
}

const deleteAttr = async (attrId: number) => {
  let res: any = await reqRemoveAttr(attrId)
  if (res.code === 200) {
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
    getAttr()
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
  <def-category :scene="scene" />
  <el-card style="margin: 10px 0">
    <div v-show="scene === 0">
      <el-button
        type="primary"
        size="default"
        icon="Plus"
        :disabled="!categoryStore.c3Id"
        @click="addAttr"
      >
        添加平台属性
      </el-button>
      <el-table border style="margin: 10px 0" :data="attrArr">
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="80px"
        ></el-table-column>
        <el-table-column label="属性名称" prop="attrName"></el-table-column>
        <el-table-column label="属性值名称">
          <template #="{ row, $index }">
            <el-tag
              style="margin: 5px"
              v-for="(item, index) in row.attrValueList"
              :key="item.id"
            >
              {{ item.valueName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #="{ row, $index }">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateAttr(row)"
            ></el-button>
            <el-popconfirm
              :title="`你确定删除${row.attrName}?`"
              width="200px"
              @confirm="deleteAttr(row.id)"
            >
              <template #reference>
                <el-button type="danger" size="small" icon="Delete"></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="scene === 1">
      <el-form :inline="true">
        <el-form-item label="属性名称">
          <el-input
            placeholder="请你输入属性名称"
            v-model="attrParams.attrName"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        :disabled="attrParams.attrName ? false : true"
        type="primary"
        size="default"
        icon="Plus"
        @click="addAttrValue"
      >
        添加属性值
      </el-button>
      <el-button size="default" @click="cancel">取消</el-button>
      <el-table border style="margin: 10px 0" :data="attrParams.attrValueList">
        <el-table-column
          label="序号"
          width="80px"
          type="index"
          align="center"
        ></el-table-column>
        <el-table-column label="属性值名称">
          <template #="{ row, $index }">
            <el-input
              :ref="(vc:any)=>inputArr[$index]=vc"
              v-if="row.flag"
              placeholder="请你输入属性值名称"
              v-model="row.valueName"
              @blur="toLook(row, $index)"
            ></el-input>
            <div v-else @click="toEdit(row, $index)">{{ row.valueName }}</div>
          </template>
        </el-table-column>
        <el-table-column label="属性值操作">
          <template #="{ row, $index }">
            <el-button
              type="danger"
              size="small"
              icon="Delete"
              @click="attrParams.attrValueList.splice($index, 1)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="primary"
        size="default"
        @click="save"
        :disabled="attrParams.attrValueList.length > 0 ? false : true"
      >
        保存
      </el-button>
      <el-button size="default" @click="cancel">取消</el-button>
    </div>
  </el-card>
</template>
<style lang="scss" scoped></style>
