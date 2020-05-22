<template>
	<div class="app" v-if="user.indexOf($route.path) != -1">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item info="" to="/home">
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? index.active : index.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item info="3" to="/cart">
          <span>购物车</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? cart.active : cart.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item info=""  to="/person">
          <span>个人中心</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? person.active : person.normal"
          >
        </van-tabbar-item>
      </van-tabbar>
    </div>
    
  </div>
  <div class="app" v-else>2
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ['/home', '/cart', '/person'],
      active: 0,
      index: {
        normal: 'src/assets/images/index/index-never.png',
        active: 'src/assets/images/index/index.png'
      },
      cart: {
        normal: 'src/assets/images/index/cart-never.png',
        active: 'src/assets/images/index/cart.png'
      },
      person: {
        normal: 'src/assets/images/index/person-never.png',
        active: 'src/assets/images/index/person.png'
      }
    }
  },

  methods: {
  }
}
</script>
<style scoped>
.app{
  height: 100%;
}
.content{
  min-height: 100%;
  height: 100%;
  padding-bottom: 50px;
}
router-view{
  height: 100%;
}
.tabbar{
  margin-top: -50px;
  height: 50px;
}
</style>
