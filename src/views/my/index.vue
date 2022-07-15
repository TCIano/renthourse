<template>
  <div class="my">
    <!-- 未登录状态 token为空显示去登录-->
    <div class="unLgin" v-if="!token">
      <div class="img">
        <img src="@/assets/mybg.png" alt="" />
      </div>
      <div class="avator">
        <img src="" alt="" />
      </div>
      <div class="peop"><span>游客</span></div>
      <van-sticky>
        <van-button type="primary" class="LoginBtn" @click="login">
          去登录
        </van-button>
      </van-sticky>
    </div>
    <!-- 登录状态 -->
    <div class="Lgin" v-else>
      <div class="img">
        <img src="@/assets/mybg.png" alt="" />
      </div>
      <div class="avator">
        <img src="@/assets/avatar.png" alt="" />
      </div>
      <div class="peop">
        <span>{{ userInfo.nickname || '游客' }}</span>
      </div>
      <div class="userContent">编辑个人资料</div>
      <van-sticky>
        <van-button type="primary" class="LoginBtn" @click="loginOut">
          退出
        </van-button>
      </van-sticky>
    </div>
    <van-grid :column-num="3" gutter="20px" center :border="false" clickable>
      <van-grid-item icon="photo-o" text="我的收藏" to="/collect">
        <!-- <van-icon name="star-o" /> -->
        <template #icon>
          <span class="iconfont icon-sousuo"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="我的出租" to="/rent">
        <template #icon>
          <span class="iconfont icon-shouye"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="历史记录" to="/history">
        <template #icon>
          <span class="iconfont icon-lishi"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="成为房主">
        <template #icon>
          <span class="iconfont icon-mingpian"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="个人资料">
        <template #icon>
          <span class="iconfont icon-wode"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="联系我们">
        <template #icon>
          <span class="iconfont icon-lianxiwomen"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="join">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { info } from '@/api/login'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      userInfo: {} // 存储用户信息
    }
  },
  methods: {
    login () {
      console.log(this)
      this.$router.push({
        name: 'login'
      })
      // 获取用户信息
    },
    // 获取用户信息 方法
    async getUserInfo () {
      const res = await info(this.token)
      console.log(res)
      this.userInfo = res.data.body
      console.log(this.userInfo)
    },
    loginOut () {
      //
      this.$dialog
        .confirm({
          title: '提示',
          message: '确定退出吗？'
        })
        .then(() => {
          // on confirm
          // 清除token
          localStorage.removeItem('token')
          // 重新获取token
          this.token = localStorage.getItem('token')
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  created () {
    // 用户用户信息函
    this.getUserInfo()
  }
}
</script>

<style scoped>
.my {
  /* display: flex; */
  /* background: url('@/assets/mybg.png') no-repeat; */
  /* background-size: contain; */
  height: 100%;
  text-align: center;
  margin: 0;
}
.img {
  float: left;
}
img {
  width: 100%;
  /* margin-top: -130px; */
}

:deep(.van-sticky) {
  float: left;
  z-index: 1000;
  margin-left: 50px;
  margin-top: -1.73333rem;
  width: 650px;
  height: 350px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
}
/* :deep(.van-button::before) {
  height: 10px;
} */
:deep(.van-button--normal) {
  height: 70px;
  width: 150px;
  margin-top: 210px;
  border-radius: 5px;
}
.peop {
  /* float: left; */
  position: relative;
  top: -40px;
  right: 160px;
  height: 60px;
  margin-top: 120px;
  margin-left: 315px;
}
.peop span {
  font-size: 30px;
}
.Lgin .avator {
  position: absolute;
  top: 185px;
  left: 50%;
  margin-left: -75px;
  border-radius: 150px;
  width: 150px;
  height: 150px;
  background-color: #ccc;
  box-shadow: 0 0 10px 3px #ddd;
}
.unLgin .avator {
  position: relative;

  top: 185px;
  left: 50%;
  margin-left: -75px;
  border-radius: 150px;
  width: 150px;
  height: 150px;
  background-color: #ccc;
  box-shadow: 0 0 10px 3px #ddd;
}
.van-grid {
  /* float: left; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.van-grid {
  width: 100%;
}
.join {
  position: absolute;
  top: 70%;
  /* transform: translateY(350px); */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 90%;
  margin-top: 120px;
}

/* 登录状态 */
.Lgin {
  position: absolute;
  top: 0;
  /* left: 50%; */
}
.userContent {
  font-size: 12px;
  color: #bbb;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -70px;
  transform: translateY(100px);
  /* width: 50px; */
  /* float: left; */
  /* height: 50px; */
  margin-top: 10px;
}
</style>
