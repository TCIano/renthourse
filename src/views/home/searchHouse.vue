<template>
  <div>
    <form action="/">
      <van-search
        v-model.trim="keywords"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.back()"
      />
    </form>
    <!-- 搜索建议 -->
    <searchSuggestion :keywords="keywords"></searchSuggestion>
  </div>
</template>

<script>
import searchSuggestion from './components/searchSuggestion.vue'
export default {
  data () {
    return {
      keywords: '' // 搜索关键词
    }
  },
  components: {
    searchSuggestion
  },
  methods: {
    onSearch () {}
  }
}
</script>

<style></style>
