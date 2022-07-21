<template>
  <div class="my">
    <!-- 搜索框 -->
    <searchVue @gotoCityList="gotoCityList"></searchVue>
    <van-nav-bar class="navbar" left-arrow @click-left="backHomePage" />
    <!-- 下拉菜单 -->
    <van-sticky :offset-top="0">
      <DropDown></DropDown>
    </van-sticky>

    <!-- 对应条件的房屋列表 -->
    <comList
      :list="currentCityInfo"
      v-for="(item, index) in currentCityInfo"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :tags="item.tags"
      :src="`${base}${item.houseImg}`"
      :title="item.title"
      :id="item.houseCode"
      @gotoDetail="gotoDetail"
    ></comList>
  </div>
</template>

<script>
import DropDown from './DropDownMenu.vue'
import searchVue from '../home/components/search.vue'
import comList from '@/components/comList.vue'

import { getAreaInfo, getHousesList } from '@/api'
export default {
  data () {
    return {
      base: 'http://liufusong.top:8080', // 图片基本地址

      currentCityInfo: [] // 当前城市信息
    }
  },
  components: {
    searchVue,
    DropDown,
    comList
  },
  created () {
    this.getAreaInfo()
    this.getHousesList()
  },
  methods: {
    backHomePage () {
      this.$router.push('/all/home')
    },
    // 跳转城市列表
    gotoCityList () {
      // this.getHousesList()
      this.$router.push('/cityList')
    },
    // 根据名字获取id
    async getAreaInfo () {
      try {
        const {
          data: { body }
        } = await getAreaInfo(this.$store.state.currentCity)
        // console.log(body)
        this.cityId = body
        this.$store.commit('setCityId', body.value)
      } catch (error) {
        console.log(error)
      }
    },
    async getHousesList () {
      const {
        data: { body }
      } = await getHousesList(this.$store.state.cityId)
      // console.log(body)
      this.currentCityInfo = body.list
      console.log(this.currentCityInfo)
    },
    gotoDetail (id) {
      console.log(id)
      this.$store.commit('getDetailId', id)
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  :deep(.search) {
    // z-index: 100000;
    height: 0.93333rem;
    width: 90%;
    // display: flex;
    position: absolute;
    top: 0px;
    // justify-content: space-between;
    margin: 10px 70px;
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
}
</style>
