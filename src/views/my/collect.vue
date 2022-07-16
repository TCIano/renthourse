<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="我的收藏"
      left-arrow
      @click-left="backHomePage"
    />
    <!-- <van-card
      v-for="(item, index) in collectList"
      :key="index"
      :price="item.price"
      :title="item.desc"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(tagItem, index) in item.tags"
          :key="index"
        >
          {{ tagItem }}
        </van-tag>
      </template>
    </van-card> -->
    <comList
      :list="collectList"
      v-for="(item, index) in collectList"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :tags="item.tags"
      :src="`${base}${item.houseImg}`"
      :title="item.title"
      :id="item.houseCode"
      @gotoDetail="gotoDetail"
    >
    </comList>
  </div>
</template>

<script>
import comList from '@/components/comList.vue'
import { collect } from '@/api/user'
export default {
  name: 'collect',
  data () {
    return {
      collectList: [],
      base: 'http://liufusong.top:8080' // 图片基本地址
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
    // 获取收藏列表
    async getCollectList () {
      // const token = localStorage.getItem('MY_TOKEN')
      // console.log(token)
      const res = await collect()
      console.log(res)
      this.collectList = res.data.body
    },
    gotoDetail (id) {
      console.log(id)
      this.$store.commit('getDetailId', id)
      this.$router.push(`/detail/${id}`)
    }
  },
  created () {
    this.getCollectList()
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
