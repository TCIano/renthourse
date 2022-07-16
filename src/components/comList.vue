<template>
  <van-card
    :price="`${price}元/月` || ''"
    :title="title"
    :desc="desc"
    :thumb="src"
  >
    <template #tags>
      <van-tag
        plain
        type="danger"
        v-for="(tagItem, index) in tags"
        :key="index"
        @click="gotoDetail()"
      >
        {{ tagItem }}
      </van-tag>
    </template>
  </van-card>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    // list: String
    id: String,
    title: String,
    price: Number,

    desc: String,
    src: String,
    tags: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoDetail () {
      console.log(this.id)
      this.$emit('gotoDetail', this.id)
    }
  }
}
</script>

<style scoped>
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
