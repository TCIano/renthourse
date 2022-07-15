<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/all/home">
        <span>首页</span>
        <template #icon> <span class="iconfont icon-shouye"> </span> </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/all/search">
        <span>找房</span>
        <template #icon> <span class="iconfont icon-sousuo"> </span> </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/all/news">
        <span>资讯</span>
        <template #icon> <span class="iconfont icon-zixun"> </span> </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/all/my">
        <span>我的</span>
        <template #icon> <span class="iconfont icon-wode"> </span> </template>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
