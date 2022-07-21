<template>
  <div>
    <van-cell value="请选择" is-link clickable @click="open">
      <template #title>
        <span>{{ title }}</span>
      </template>
    </van-cell>
    <van-popup v-model="is" position="bottom" :style="{ height: '50%' }">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      >
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      is: this.isOpen,
      columns: this.list
    }
  },
  props: ['title', 'isOpen', 'list'],
  methods: {
    open () {
      this.is = true
    },
    onConfirm () {},
    onCancel () {},
    onChange () {}
  }
}
</script>

<style></style>
