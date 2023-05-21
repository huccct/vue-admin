/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'element-plus'
declare module 'nprogress'
declare module 'element-plus/dist/locale/zh-cn.mjs'
