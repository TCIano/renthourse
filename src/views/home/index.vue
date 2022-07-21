<template>
  <div class="my">
    <!-- 头部搜索
    <div class="search">
      <div class="position" @click="gotoCityList">
        <p>{{ $store.state.currentCity }}</p>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div class="ipt">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" name="" id="" placeholder="请输入小区或地址" />
      </div>
      <div class="map">
        <div class="bor">
          <span class="iconfont icon-ditu"></span>
        </div>
      </div>
    </div> -->
    <searchVue @gotoCityList="gotoCityList"></searchVue>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="`${base}${item.imgSrc}`" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 按钮 -->
    <van-grid :column-num="4" center :border="false" clickable square>
      <van-grid-item icon="photo-o" text="整租" to="/all/search">
        <!-- <van-icon name="star-o" /> -->
        <template #icon>
          <span class="iconfont icon-zhengzu"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="合租" to="/all/search">
        <template #icon>
          <span class="iconfont icon-hezu"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="地图找房" to="/history">
        <template #icon>
          <span class="iconfont icon-ditu"></span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="去出租" to="/addrent">
        <template #icon>
          <span class="iconfont icon-shouye"></span>
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 租房小组 -->
    <div class="group">
      <div class="title">
        <div class="header">
          <p>租房小组</p>
          <span>更多</span>
        </div>
        <div class="main">
          <van-grid
            :column-num="2"
            gutter="10"
            direction="horizontal"
            class="item"
          >
            <van-grid-item v-for="item in currentCityInfo" :key="item.id">
              <img :src="`${base}${item.imgSrc}`" alt="" />
              <div class="title">
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSwiper } from '@/api/home'
import { getHouseGroup, getAreaInfo } from '@/api'
import searchVue from './components/search.vue'
export default {
  data () {
    return {
      base: 'http://liufusong.top:8080',
      imgList: [], // 存放轮播图
      currentCityInfo: [] // 当前城市租房小组内容
    }
  },
  components: {
    searchVue
  },
  methods: {
    // 获取城市列表
    gotoCityList () {
      this.$router.push('/cityList')
    },
    // 轮播图
    async getSwiper () {
      const res = await getSwiper()
      // console.log(res.data.body)
      this.imgList = res.data.body
    },
    // 租房小组
    async getHouseGroup () {
      const {
        data: { body }
      } = await getHouseGroup(this.$store.state.cityId)
      // console.log(body)
      this.currentCityInfo = body
      // console.log(this.currentCityInfo)
    },
    // 根据城市名字获取城市id
    async getAreaInfo () {
      try {
        const {
          data: { body }
        } = await getAreaInfo(this.$store.state.currentCity)
        console.log(body)
        this.cityId = body
        this.$store.commit('setCityId', body.value)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.getSwiper()
    this.getHouseGroup()
    this.getAreaInfo()
  }
}
</script>

<style lang="less" scoped>
.my {
  height: calc(100vh - 75px);
  background-color: #f6f5f6;

  //头部搜索
  .search {
    z-index: 100000;
    height: 70px;
    // background-color: plum;
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: space-between;
    margin: 50px 30px;

    .position {
      padding-left: 20px;
      // margin-bottom: 10px;
      padding-bottom: 5px;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: #ffffff;
      flex: 1;
      p {
        font-size: 30px;
      }
      .iconfont {
        margin-left: 10px;
        font-size: 15px;
        color: #ccc;
      }
    }
    .ipt {
      position: relative;
      flex: 4;
      font-size: 20px;
      background-color: #ffffff;
      input {
        color: #ccc;
        border: 1px solid #fff;
        border-left: 1px solid #ccc;
        font-size: 27px;
        margin-top: 7px;
        height: 45px;
        padding-left: 60px;
      }
      span {
        line-height: 67px;
        position: absolute;
        left: 15px;
      }
    }
    .map {
      border-radius: 10px;
      flex: 1;
      .bor {
        width: 50px;
        height: 50px;
        border: 4px solid #fff;
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
        margin: 5px 20px;
        .iconfont {
          color: #fff;
        }
      }
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 450px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img {
      height: 100%;
    }
  }

  .van-grid-item {
    color: #3dc28b;

    .title {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      // margin: 0 auto;
      line-height: 0px;
      // margin-top: 10px;
      :deep(p) {
        // align-items: center;
        font-size: 0.2rem;
      }
    }
    img {
      margin-right: 10px;
      width: 100px;
      height: 100px;
    }

    // height: 50px;
    .iconfont {
      font-size: 55px;
    }
    :deep(.van-grid-item__text) {
      // margin-top: 30px;
      font-size: 0.35rem;
      color: #000;
      line-height: 2.5;
      word-break: break-all;
    }
  }
  .group {
    padding: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 600;
        font-size: 30px;
      }
      span {
        font-size: 30px;
        color: #787d82;
      }
    }
  }
  .main {
    .van-grid-item {
      border-radius: 30px;
      height: 145px;
      color: #000;
      p {
        font-size: 30px;
      }
    }
  }
}
</style>
