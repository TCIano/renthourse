<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="backHomePage"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit" class="form">
      <van-field
        class="field"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="field"
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block class="loginBtn" type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="register">
      <span>还没有账号，去注册~</span>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录提交事件
    async onSubmit () {
      console.log(this)
      try {
        const res = await login({
          username: this.username,
          password: this.password
        })
        console.log(res)
        this.$toast.success(res.data.description)
        // 登录成功之后跳转到/home
        // 存储token
        // localStorage.setItem('token', res.data.body.token)
        this.$store.commit('setUser', res.data.body.token)
        this.$router.push({
          path: '/all/home'
        })
      } catch (e) {
        if (e.data.status !== 400) {
          this.$toast.fail(e.data.description)
        }
      }
    },
    // 返回首页
    backHomePage () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
:deep(.form) {
  margin: 30px;
}
.field {
  margin-top: 40px;
  font-size: 35px;
}

:deep(.navbar) {
  background-color: #21b97a;
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-icon-arrow-left) {
  color: #fff;
}
.loginBtn {
  color: #fff;
  background-color: #21b97a;
}
:deep(.van-field__body) {
  /* border-bottom: 1px solid #ccc; */
}
.register {
  text-align: center;
}
:deep(.register span) {
  font-size: 30px;
}
</style>
