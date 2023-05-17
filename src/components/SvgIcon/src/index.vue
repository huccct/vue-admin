<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 19:59:04
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-17 20:09:32
-->
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<style lang="scss" scoped></style>
