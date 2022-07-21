<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="我的出租"
      left-arrow
      @click-left="backHomePage"
    />
    <comListVue
      :list="rentHouseList"
      v-for="(item, index) in rentHouseList"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :tags="item.tags"
      :src="`${base}${item.houseImg}`"
      :title="item.title"
      :id="item.houseCode"
      @gotoDetail="gotoDetail"
    ></comListVue>
  </div>
</template>

<script>
import comListVue from '@/components/comList.vue'
import { publishHouses } from '@/api'
export default {
  data () {
    return {
      rentHouseList: [],
      base: 'http://liufusong.top:8080' // 图片基本地址
    }
  },
  components: {
    comListVue
  },
  methods: {
    gotoDetail (id) {
      console.log(id)
      this.$store.commit('getDetailId', id)
      this.$router.push(`/detail/${id}`)
    },
    // 返回上一级
    backHomePage () {
      this.$router.back()
    },
    // 获取发布房源列表
    async publishHouses () {
      const {
        data: { body }
      } = await publishHouses()
      console.log(body)
      this.rentHouseList = body
    }
  },
  created () {
    this.publishHouses()
  }
}
</script>

<style scoped>
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
</style>
