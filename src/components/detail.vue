<template>
  <div class="my">
    <!-- 房屋消息详细信息{{ $store.state.detailId }} -->
    <van-nav-bar
      class="navbar"
      :title="houseInfo.community"
      left-arrow
      @click-left="backHomePage"
    >
    </van-nav-bar>
    <!-- <div class="img" v-if="houseInfo.houseImg.length !== 1">
      <img :src="`${base}${houseInfo.houseImg[0]}`" alt="" />
    </div> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in houseInfo.houseImg" :key="item.houseCode">
        <img :src="`${base}${item}`" alt="" />
      </van-swipe-item>
    </van-swipe>
    <comList
      :title="houseInfo.title"
      :tags="houseInfo.tags"
      :price="houseInfo.price"
    ></comList>

    <div class="houseSize">
      <div class="type">
        <span>{{ houseInfo.roomType }}</span>
        <p>房型</p>
      </div>
      <div class="size">
        <span>{{ houseInfo.size }}平米</span>
        <p>面积</p>
      </div>
    </div>
    <!-- 房屋消息详细信息 -->
    <div class="houseDe">
      <div class="type">
        <span>精装修</span>
        <p>装修</p>
      </div>
      <div class="size">
        <span v-for="(item, index) in houseInfo.oriented" :key="index">
          {{ item }}</span
        >
        <p>朝向</p>
      </div>
      <div class="size">
        <span>高楼层</span>
        <p>楼层</p>
      </div>
      <div class="size">
        <span>普通住宅</span>
        <p>类型</p>
      </div>
    </div>

    <!-- 地图 -->
    <div class="comm map">
      <div class="title">
        <h5>房屋配套</h5>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item, index) in houseInfo.supporting" :key="index">
            <span class="iconfont" v-html="icfontList[item]"></span>
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 房源概括？ -->
    <div class="comm info">
      <div class="title">
        <h5>房屋概括</h5>
      </div>
      <div class="content">
        <van-row>
          <van-col span="7" class="avator">
            <img src="@/assets/avatar.png" alt="" />
          </van-col>
          <van-col span="10">
            <p>王女士</p>
            <span class="iconfont icon-renzheng"></span>
            <span>已认证房主</span>
          </van-col>
          <van-col span="7" class="btn">
            <button>发消息</button>
          </van-col>
        </van-row>
        <div class="art">
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="comm info">
      <div class="title">
        <h5>猜你喜欢</h5>
      </div>
      <div class="content">
        <van-card
          price="4500元/月"
          title="安贞西里 3室1厅堂"
          desc="73.32㎡/南 北/低楼层"
          thumb="0"
        >
          <template #tags>
            <van-tag plain type="primary"> 随时看房 </van-tag>
          </template>
        </van-card>
        <van-card
          price="7200元/月"
          title="天居园 2室1厅堂"
          desc="83㎡/南 北/高楼层"
          thumb="0"
        >
          <template #tags>
            <van-tag plain type="primary"> 近地铁 </van-tag>
          </template>
        </van-card>
        <van-card
          price="4300元/月"
          title="安贞西里 3室1厅堂"
          desc="52㎡/南 北/低楼层"
          thumb="0"
        >
          <template #tags>
            <van-tag plain type="primary"> 集中供暖 </van-tag>
          </template>
        </van-card>
      </div>
    </div>
    <!-- 底部标签栏 -->
    <footer>
      <!-- <van-tabbar> -->
      <!-- <van-row>
          <van-col span="8">1</van-col>
          <van-col span="8">2</van-col>
          <van-col span="8">3</van-col>
        </van-row> -->
      <div class="footer">
        <div class="collect">
          <img src="http://liufusong.top:8080/img/star.png" alt="" />
          <span>收藏</span>
        </div>
        <div class="ques">在线咨询</div>
        <div class="phone">电话预约</div>
      </div>
      <!-- </van-tabbar> -->
    </footer>
  </div>
</template>

<script>
import comList from '@/components/comList.vue'

import { getHousesInfo } from '@/api/house'

export default {
  data () {
    return {
      base: 'http://liufusong.top:8080',
      houseInfo: {},
      // iconfont 样式表
      icfontList: {
        空调: '&#xe6fd;',
        天然气: '&#xe613;',
        宽带: '&#xe6ba;',
        热水器: '&#xe6fc;',
        沙发: '&#xe686;',
        电视: '&#xe90a;',
        冰箱: '&#xe90b;',
        暖气: '&#xe90d;',
        洗衣机: '&#xe60f;',
        衣柜: '&#xe60d;'
      }
    }
  },
  components: {
    comList
  },

  methods: {
    // 返回上一级
    backHomePage () {
      this.$router.back()
      console.log(this)
    },
    async getHousesInfo () {
      const res = await getHousesInfo(this.$store.state.detailId)
      // console.log(res.data)
      this.houseInfo = res.data.body
      console.log(this.houseInfo)
    }
  },
  created () {
    this.getHousesInfo()
    console.log(this.icfontList['天然气'])
  }
}
</script>

<style scoped>
.my {
  /* height: calc(100vh - 50px); */
  padding-bottom: 150px;
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
  width: 100%;
}
:deep(.van-tag--plain) {
  background-color: #fff;
  border-color: currentColor;
}
.van-card__price {
  display: inline-block;
  color: #5abaef;
  font-weight: 500;
  font-size: 0.32rem;
}
.houseSize {
  margin: 0 20px;
  padding-top: 20px;
  /* padding-bottom: 15px; */
  font-size: 35px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.houseDe {
  margin: 0 20px;
  padding-top: 20px;
  /* padding-bottom: 15px; */
  font-size: 35px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border-top: 1px solid #000; */
  border-bottom: 1px solid #000;
}
.houseDe span {
  color: black;
  font-size: 20px;
}
span {
  color: red;
  font-weight: 600;
}
p {
  margin-top: 15px;
  font-size: 20px;
  color: #ccc;
}
.footer {
  z-index: 1000;
  border-top: 1px solid #ccc;
  padding-top: 0px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  /* align-items: center; */
}
.footer div {
  background-color: #fff;
  flex: 1;
  padding-top: 20px;
  height: 80px;
  width: 33.333%;
  /* width: 300px; */
  /* margin: 0 90px; */
  font-size: 35px;
  text-align: center;
  /* margin: 0 auto; */
  line-height: 55px;
}
.collect {
  display: flex;
  /* line-height: 80px; */
  /* padding-left: 100px; */
  margin: 0 auto;
  /* justify-content: center; */
  /* text-align: center; */
  /* align-items: start; */
}
.collect span {
  margin-top: -5px;
  margin-right: -90px;
  margin-left: 10px;
  /* margin-left: 20px; */
  display: block;
  width: 100px;
  font-size: 40px;
  font-weight: normal;
  color: #ccc;
}
.collect img {
  margin-left: 20px;
  width: 45px;
  height: 45px;
}
:deep(.ques) {
  font-size: 30px;
  /* display: inline-block; */
  /* float: left; */
  /* width: 30%; */
}
.footer .phone {
  color: #fff;
  background-color: #21b97a;
}

.comm {
  padding: 0 15px;
}
.comm .title {
  font-size: 35px;
}
.title h5 {
  margin-bottom: 20px;
}
.map .content {
}
ul {
  display: flex;
  padding: 20px 20px;
  border-top: 1px solid #ccc;
}
ul li {
  display: block;
  width: 20%;
  text-align: center;
}
.map li span {
  color: #000;
}
.map .content p {
  color: #000;
}
.info .avator {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
.info p {
  font-size: 30px;
  margin-bottom: 20px;
  color: #000;
}
.info .content {
  font-size: 20px;
}
.info .content .iconfont {
  font-size: 10px;
  color: #000;
}
.info button {
  width: 150px;
  height: 80px;
  /* line-height: 150px; */
}
.info .btn {
  margin-top: 20px;
  text-align: center;
  /* margin: 0 auto; */
  line-height: 20px;
}
.info .content {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}
.info .content .art {
  margin-top: 20px;
  font-size: 28px;
}
.van-tag--plain {
  background-color: #fff;

  border-color: currentColor;
}
.van-card__price {
  display: inline-block;
  color: #f33434;
  font-weight: 500;
  font-size: 0.32rem;
}
:deep(.van-card__title) {
  font-size: 0.4rem;
}
.van-card__desc {
  color: #ccc;
}
</style>
