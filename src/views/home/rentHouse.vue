<template>
  <div class="my">
    <van-nav-bar
      class="navbar"
      title="发布房源"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-cell title="房源信息" class="col"></van-cell>
    <div>
      <van-cell
        title="小区名称"
        :value="rentHouseInfo.groupName"
        is-link
        clickable
        to="/searchGroup"
      ></van-cell>
    </div>

    <!-- 租金 -->
    <div>
      <van-cell-group>
        <van-field
          label="租金"
          placeholder="请输入用户名"
          v-model.number="rentHouseInfo.rentPrice"
        >
          <template #extra>
            <span>/月</span>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 建筑面积 -->
    <div>
      <van-cell-group>
        <van-field
          label="建筑面积"
          placeholder="请输入用户名"
          v-model="rentHouseInfo.construcArea"
        >
          <template #extra>
            <span>㎡</span>
          </template>
        </van-field>
      </van-cell-group>
    </div>

    <!-- 户型 -->
    <popUp
      title="户型"
      @click="roomTypeSelect"
      :isOpen="roomType"
      :list="['nijia']"
    ></popUp>
    <!-- 所在楼层 -->
    <popUp
      title="所在楼层"
      @click="floorSelect"
      :isOpen="floor"
      :list="['我家']"
    ></popUp>
    <!-- 朝向 -->
    <popUp title="朝向" @click="orientSelect" :isOpen="orient"></popUp>
    <!-- <van-cell title="所在楼层" value="请选择" is-link clickable></van-cell>
    <van-cell title="朝向" value="请选择" is-link clickable></van-cell> -->

    <div>
      <van-cell title="房屋标题"></van-cell>
      <van-cell-group>
        <van-field placeholder="请输入标题 （例如：整租 小区名 2室 5000元）" />
      </van-cell-group>
    </div>

    <van-cell title="房屋图像"></van-cell>
    <van-field name="uploader">
      <template #input>
        <van-uploader />
      </template>
    </van-field>

    <div>
      <van-cell title="房屋配置"></van-cell>
      <div class="setting">
        <ul>
          <li
            v-for="(item, index) in iconTitle"
            :key="index"
            @click="changeClass(item)"
            :class="item.ischeck == true ? 'gree' : ''"
          >
            <span class="iconfont" v-html="icfontList[item.name]"></span>
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>

    <van-cell title="房屋描述"></van-cell>
    <van-cell-group>
      <van-field placeholder="请输入用户名" />
    </van-cell-group>

    <!-- 按钮 -->
    <div class="btn">
      <van-button>取消</van-button>
      <van-button color="#21b97a">提交</van-button>
    </div>
  </div>
</template>

<script>
import popUp from './components/popUpItem.vue'
import { PublishHouseCondition } from '@/api'
export default {
  components: {
    popUp
  },
  data () {
    return {
      roomContion: [], // 房屋条件

      // 显示户型弹窗
      roomType: false,
      // 显示楼层弹窗
      floor: false,
      // 显示朝向弹窗
      orient: false,
      // 租房信息
      rentHouseInfo: {
        groupName: this.$route.query.clickGroup || '请输入小区名字', // 小区名称
        rentPrice: null, // 租金
        construcArea: null // 建筑面积
      },
      iconTitle: [
        { ischeck: false, name: '空调' },
        { ischeck: false, name: '天然气' },
        { ischeck: false, name: '宽带' },
        { ischeck: false, name: '热水器' },
        { ischeck: false, name: '沙发' },
        { ischeck: false, name: '电视' },
        { ischeck: false, name: '冰箱' },
        { ischeck: false, name: '暖气' },
        { ischeck: false, name: '洗衣机' },
        { ischeck: false, name: '衣柜' }
      ],
      icfontList: {
        空调: '&#xe6fd;',
        天然气: '&#xe613;',
        宽带: '&#xe6ba;',
        热水器: '&#xe6fc;',
        沙发: '&#xe686;',
        电视: '&#xe90a;',
        冰箱: '&#xe90b;',
        暖气: '&#xe90d;',
        洗衣机: '&#xe60f;',
        衣柜: '&#xe60d;'
      }
    }
  },
  created () {
    // this.groupName = '请输入小区名字'
    this.PublishHouseCondition()
  },
  methods: {
    changeClass (item) {
      item.ischeck = !item.ischeck
      //   this.isColor = !this.isColor
    },
    // 获取小区发布条件
    async PublishHouseCondition () {
      const {
        data: { body }
      } = await PublishHouseCondition()
      console.log(body)
      this.roomContion = body
    },
    // 选择户型
    roomTypeSelect () {
      this.roomType = true
    },
    // 选中楼层
    floorSelect () {
      this.floor = true
    },
    // 选中朝向
    orientSelect () {
      this.orient = true
    }
  }
}
</script>

<style scoped lang="less">
.my {
  padding-bottom: 100px;
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
  .van-cell.col {
    color: #21b97a;
  }
  :deep(.setting) {
    // width: 100%;
    ul {
      // width: 600px;
      display: flex;
      flex-wrap: wrap;
      //   justify-content: center;
      //   width: 100%;
      padding: 30px 20px;
      border-top: 1px solid #ccc;
      li {
        //   flex: 20;
        // display: block;
        width: 20%;
        text-align: center;
        margin-bottom: 10px;
        p {
          margin-top: 5px;
          font-size: 20px;
        }
        span {
          font-size: 50px;
        }
      }
    }
  }
  .btn {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    button {
      height: 100px;
      border: 0px solid #fff;
      width: 50%;
      // color: #21b97a;
      font-size: 30px;
    }
  }
  .gree {
    color: #21b97a;
  }
}
</style>
