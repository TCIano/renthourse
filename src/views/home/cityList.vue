<template>
  <div class="my">
    <!-- <button @click="listFileter">1515</button> -->
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-index-bar>
      <!-- <img src="@/assets/avatar.png" alt="" /> -->
      <!-- <div v-for="(item, index) in filterList" :key="index"> -->
      <van-index-anchor>
        <span>热门城市</span>
        <van-cell
          v-for="hotItem in hotCitys"
          :key="hotItem.value"
          :title="hotItem.label"
          @click="selectCity(hotItem.label)"
        />
      </van-index-anchor>
      <van-index-anchor
        :index="index"
        v-for="(item, index) in filterList"
        :key="index"
      >
        {{ index }}
        <van-cell :title="k.label" v-for="(k, v) in item" :key="v" />
      </van-index-anchor>
    </van-index-bar>

    <!-- </div> -->
  </div>
</template>

<script>
import { getCityList, getHotCitys } from '@/api'
export default {
  name: 'cityList',
  data () {
    return {
      cityList: [], // 城市列表
      hotCitys: [], // 热门城市列表
      filterList: {}, // 排序好的城市
      letter: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ] // 字母
      //   currentLetter: []?\
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    // 数组过滤
    listFileter () {
      // console.log(this.cityList)

      this.letter.forEach((item) => {
        // 给最终数组设置26个字母的 属性值，并且给每个属性设置空数组的属性值
        // this.filterList[item] = []

        this.$set(
          this.filterList,
          item,
          this.cityList.filter((value) => {
            return (
              value.short[0] === item.toLowerCase() &&
              value.label !== '北京' &&
              value.label !== '深圳' &&
              value.label !== '广州' &&
              value.label !== '上海'
            )
          })
        )
      })

      console.log(this.filterList)
    },
    // 获取城市列表
    async getCityList () {
      const {
        data: { body }
      } = await getCityList(1)
      //   console.log(body)
      this.cityList = body
      // console.log(this.cityList)
      this.listFileter()
      // this.$store.commit('cityId', body.value)
    },
    // 选中城市
    selectCity (city) {
      console.log(city)
      // 把当前城市放到vuex中
      this.$store.commit('setCurrentCity', city)
      // this.$store.commit('cityId',)
      this.$router.back()
    },
    // 获取热门城市
    async getHotCitys () {
      const {
        data: { body }
      } = await getHotCitys()
      console.log(body)
      this.hotCitys = body
    }
  },
  created () {
    this.getCityList()
    this.getHotCitys()
    // console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
.my {
  background-color: #f7f8fa;
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
    .van-icon-arrow-left {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
