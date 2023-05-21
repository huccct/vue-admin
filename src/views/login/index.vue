<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:38:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-20 20:19:50
-->
<script setup lang="ts">
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
// VerifyCode import
import image1 from '@/assets/images/verifyCode/0050.png'
import image2 from '@/assets/images/verifyCode/0254.png'
import image3 from '@/assets/images/verifyCode/1580.png'
import image4 from '@/assets/images/verifyCode/2927.png'
import image5 from '@/assets/images/verifyCode/3812.png'
import image6 from '@/assets/images/verifyCode/4294.png'
import image7 from '@/assets/images/verifyCode/6061.png'
import image8 from '@/assets/images/verifyCode/6102.png'
import image9 from '@/assets/images/verifyCode/8322.png'
import image10 from '@/assets/images/verifyCode/9041.png'

let $router = useRouter()
let loading = ref(false)
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
let loginForms = ref()

const currentCodeImageIndex = ref(0)

const codeImageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  // 添加其他验证码图片的路径
]

const codeImageUrl = computed(() => {
  return codeImageUrls[currentCodeImageIndex.value]
})
// console.log(codeImageUrls[0])

const refreshCodeImages = () => {
  currentCodeImageIndex.value =
    (currentCodeImageIndex.value + 1) % codeImageUrls.length
}
const loginForm = reactive({
  username: 'admin',
  password: '123456',
  verifyCode: '',
})

const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

const validatorVerifyCode = (rule: any, value: any, callback: any) => {
  const tmp: { value: string } = codeImageUrl

  const actualCode = tmp.value?.match(/\/(\d+)\.png$/)?.[1]

  if (value.length === 0) {
    callback(new Error('请输入验证码'))
  } else if (value.length < 4) {
    callback(new Error('请输入正确的验证码'))
  } else if (actualCode !== value) {
    callback(new Error('请输入正确的验证码'))
  } else if (actualCode === value) {
    callback()
  }
}

const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: `Hi, ${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
  verifyCode: [
    {
      trigger: 'blur',
      validator: validatorVerifyCode,
    },
  ],
}

// ../../assets/images/0050.png
</script>
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-card class="login_form">
          <h1>Vue-Admin</h1>
          <el-form :model="loginForm" :rules="rules" ref="loginForms">
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                clearable
                placeholder="Username"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                show-password
                v-model="loginForm.password"
                size="large"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input
                :prefix-icon="Warning"
                show-password
                v-model="loginForm.verifyCode"
                placeholder="VerifyCode"
                size="large"
              >
                <template #append>
                  <img
                    :src="(codeImageUrl as unknown as string)"
                    alt="验证码"
                    style="cursor: pointer"
                    @click="refreshCodeImages"
                  />
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  position: fixed;
  .login_form {
    position: relative;
    width: 55%;
    top: 25vh;
    left: 10vw;
    padding: 10px;
    h1 {
      background: linear-gradient(to right, blue, rgb(35, 60, 70));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 40px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 40px;
      margin-top: -10px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
.el-card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
