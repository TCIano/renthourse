<template>
  <van-card :price="`${price}元/月`" :title="desc" :thumb="src">
    <template #tags>
      <van-tag
        plain
        type="danger"
        v-for="(tagItem, index) in tags"
        :key="index"
      >
        {{ tagItem }}
      </van-tag>
    </template>
  </van-card>
</template>

<script>
export default {
  props: {
    // list: String
    price: Number,
    desc: String,
    src: String,
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.van-tag--plain {
  background-color: #c5b7ed;
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
</style>
