/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 14:32:02
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-20 11:41:08
 */
import { createApp } from 'vue'
import App from '@/App.vue'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index'
import 'element-plus/theme-chalk/el-notification.css'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(globalComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
