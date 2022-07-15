<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="我的出租"
      left-arrow
      @click-left="backHomePage"
    />
  </div>
</template>

<script>
export default {
  methods: {
    // 返回上一级
    backHomePage () {
      this.$router.back()
    }
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
