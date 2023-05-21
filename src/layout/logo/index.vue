<script setup lang="ts">
import setting from '@/setting'
</script>
<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <span style="padding-left: 10px">{{ setting.title }}</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  color: #959ea6;
  justify-content: center;
  font-weight: 700;
  font-size: $base-logo-title-fontSize;
  img {
    widows: 35px;
    height: 35px;
    border-radius: 10px;
  }
}
</style>
