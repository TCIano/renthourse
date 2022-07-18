<template>
  <div>
    <!-- 头部搜索 -->
    <div class="search">
      <div class="position" @click="gotoCityList">
        <p>{{ $store.state.currentCity }}</p>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div class="ipt">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" name="" id="" placeholder="请输入小区或地址" />
      </div>
      <div class="map">
        <div class="bor">
          <span class="iconfont icon-ditu"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoCityList () {
      this.$emit('gotoCityList')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  z-index: 100000;
  height: 70px;
  // background-color: plum;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  margin: 50px 30px;

  .position {
    padding-left: 20px;
    // margin-bottom: 10px;
    padding-bottom: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #ffffff;
    flex: 1;
    p {
      font-size: 30px;
    }
    .iconfont {
      margin-left: 10px;
      font-size: 15px;
      color: #ccc;
    }
  }
  .ipt {
    position: relative;
    flex: 4;
    font-size: 20px;
    background-color: #ffffff;
    input {
      color: #ccc;
      border: 1px solid #fff;
      border-left: 1px solid #ccc;
      font-size: 27px;
      margin-top: 7px;
      height: 45px;
      padding-left: 60px;
    }
    span {
      line-height: 67px;
      position: absolute;
      left: 15px;
    }
  }
  .map {
    border-radius: 10px;
    flex: 1;
    .bor {
      width: 50px;
      height: 50px;
      border: 4px solid #fff;
      border-radius: 50px;
      text-align: center;
      line-height: 50px;
      margin: 5px 20px;
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>
