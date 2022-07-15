<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
:deep(.iconfont) {
  font-size: 40px;
}
</style>
