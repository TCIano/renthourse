<template>
  <div>
    <!-- 头部搜索 -->

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="`${base}${item.imgSrc}`" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getSwiper } from '@/api/home'
export default {
  data () {
    return {
      base: 'http://liufusong.top:8080',
      imgList: [] // 存放轮播图
    }
  },
  methods: {
    async getSwiper () {
      const res = await getSwiper()
      console.log(res.data.body)
      this.imgList = res.data.body
    }
  },
  created () {
    this.getSwiper()
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 450px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  height: 100%;
}
</style>
