<template>
  <div>
    <van-cell v-for="(item, index) in searchSuggestion" :key="index">
      <template #title>
        <span @click="selectGroup(item, item.communityName)">{{
          item.communityName
        }}</span>
      </template>
      <template #icon>
        <van-icon name="search" class="search-icon"></van-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api'
export default {
  data () {
    return {
      searchSuggestion: []
    }
  },
  props: {
    keywords: {
      type: String,
      required: true
    }
  },
  watch: {
    keywords: {
      //   immediate: true,
      handler () {
        // 当输入框内容发送变化时候开始发请求
        if (this.keywords === '') {
          return this.$toast.fail('请输入关键字')
        } else {
          this.getSearchSuggestions()
        }
      }
    }
  },
  methods: {
    // 获取建议
    async getSearchSuggestions () {
      try {
        const {
          data: { body }
        } = await getSearchSuggestions(this.keywords, this.$store.state.cityId)
        //   console.log(body)
        if (body.length === 0) {
          //   this.searchSuggestion = []
          return this.$toast.fail('没有搜索结果')
        }
        this.searchSuggestion = body

        console.log(body)
      } catch (error) {
        this.$toast.fail('重新获取')
      }
    },
    // 点击关键字跳转
    selectGroup (currentCommity, suggest) {
      console.log(currentCommity)
      this.$store.commit('setcurrentCommityId', currentCommity.community)
      this.$router.push({
        name: 'addrent',
        query: {
          clickGroup: suggest // 给父组件传递小区名字参数
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.search-icon {
  padding-top: 12px;
  margin-right: 10px;
}
</style>
