<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:38:54
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-24 10:19:00
-->
<script setup lang="ts">
import { onMounted } from 'vue'

import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>
<template>
  <h1></h1>
</template>
<style lang="scss" scoped></style>
