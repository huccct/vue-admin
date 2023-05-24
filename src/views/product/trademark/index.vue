<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-21 16:19:15
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-24 16:08:56
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqHasTradeMark } from '@/api/product/trademark'
import type {
  Records,
  TradeMarkResponseData,
} from '@/api/product/trademark/type'
let pageNo = ref<number>(1)

let limit = ref<number>(3)
let total = ref<number>(0)
let dialogFormVisible = ref<boolean>(false)

let tradeMarkArr = ref<Records>([])
const getHasTradeMark = async (pager = 1) => {
  pageNo.value = pager
  let res: TradeMarkResponseData = await reqHasTradeMark(
    pageNo.value,
    limit.value,
  )
  if (res.code === 200) {
    total.value = res.data.total
    tradeMarkArr.value = res.data.records
  }
}

onMounted(() => {
  getHasTradeMark()
})

const sizeChange = () => {
  getHasTradeMark()
}

const addTradeMark = () => {
  dialogFormVisible.value = true
}
const updateTradeMark = () => {
  dialogFormVisible.value = true
}

const cancel = () => {
  dialogFormVisible.value = false
}

const confirm = () => {
  dialogFormVisible.value = false
}
</script>
<template>
  <el-card class="box-card">
    <!-- 添加品牌 -->
    <el-button type="primary" size="default" icon="Plus" @click="addTradeMark">
      添加品牌
    </el-button>
    <el-table style="margin: 10px 0" border :data="tradeMarkArr">
      <el-table-column
        label="序号"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column label="品牌名称" prop="tmName"></el-table-column>
      <el-table-column label="品牌LOGO">
        <template #="{ row, $index }">
          <img
            :src="row.logoUrl"
            alt="图片丢失了~"
            style="width: 100px; height: 100px"
          />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ row, $index }">
          <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="updateTradeMark"
          ></el-button>
          <el-button type="danger" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- pagination -->
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="limit"
      :page-sizes="[3, 5, 7, 9]"
      :background="true"
      layout="prev, pager, next, jumper, ->, sizes, total"
      :total="total"
      @current-change="getHasTradeMark"
      @size-change="sizeChange"
    />
  </el-card>

  <el-dialog v-model="dialogFormVisible" title="添加品牌">
    <el-form style="width: 90%">
      <el-form-item label="品牌名称" label-width="80px">
        <el-input placeholder="请您输入品牌名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌Logo" label-width="80px">
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
      <el-button type="primary" size="default" @click="confirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
