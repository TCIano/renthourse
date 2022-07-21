<template>
  <div class="my">
    <van-dropdown-menu>
      <van-dropdown-item title="区域" ref="item">
        <van-picker
          show-toolbar
          toolbar-position="bottom"
          value-key="label"
          :columns="hasTextAttrColums"
          @cancel="hidePick"
          @confirm="onConfirm"
        />
      </van-dropdown-item>
      <van-dropdown-item title="方式">
        <template> </template>
      </van-dropdown-item>
      <van-dropdown-item title="租金">
        <template> </template>
      </van-dropdown-item>
      <van-dropdown-item title="筛选">
        <template> </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { getAeraHouses } from '@/api'

export default {
  data () {
    return {
      showPick: false,
      columns: [], // 未处理的数
      hasTextAttrColums: [
        // { label: '123', children: [{ label: '789', children: [] }] }
      ] // 处理过的数组
    }
  },
  components: {},
  methods: {
    // 获取房屋查询条件
    async getAeraHouses () {
      const {
        data: { body }
      } = await getAeraHouses(this.$store.state.cityId)
      // console.log(body)
      this.columns.push(body.area, body.subway)
      console.log(this.columns)
      // 处理数据，给每个层级  加一个属性children为
      this.addAttribution(this.columns)
      console.log(this.hasTextAttrColums)
    },
    // 给每个数据添加属性
    addAttribution (arry) {
      this.hasTextAttrColums = arry.map((item) => {
        if (!item.children) {
          // 如果没有children那就，加一个属性
          this.$set(item, 'children', [])
          // this.addAttribution(item.children)
        }
        // 如果有children属性那就往下递归
        this.addAttribution(item.children)
        return item
      })
    },
    // 点击去过滤数据
    onConfirm (value) {
      console.log(value)
      this.$refs.item.toggle()
    },
    // 隐藏pick
    hidePick () {
      console.log(this.$refs)
      this.$refs.item.toggle()
    }
  },
  created () {
    this.getAeraHouses()
  }
}
</script>

<style lang="less" scoped>
.my {
  padding-top: 80px;
  :deep(.van-dropdown-menu__bar) {
    margin-top: -85px;
    z-index: 100;
    width: 100%;
    //   position: fixed;
    // top: 80px;
  }
}
</style>
