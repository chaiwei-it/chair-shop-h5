<template>
  <div class="cart">
    <div class="content">购物车</div>
    <div class="total">结算</div>
  </div>

</template>

<script>
import lib from '@/assets/js/lib.js'
const { ajax, api } = lib
export default {

  data() {
    return {
      navbar: [],
      isPage: false
    }
  },

  mounted() {
    this.getCategoryList()
  },

  methods: {
    //获取分类列表
    getCategoryList: function () {
      var that = this;
      let callback = (data) => {
        var data= data.list
        that.setData({
          navbar: [{ name: '铭美推荐', id: 0 }],
        })
        var navbar = that.data.navbar
        for (var i = 0; i < data.length; i++) {
          navbar.push(data[i])
        }
        this.navbar= navbar,
        this.isPage= true
      }
      let data = ({
        parentId: 0
      })
      ajax(api.goodsClassList,"POST", data, callback)
    },
  }
}
</script>

<style scoped>
.cart{
  /*position: relative;*/
  width: 100%;
  height: 100%;
}
.content{
  min-height: 100%;
  padding-bottom: -50px;
}
.total{
  margin-top: -50px;
  height: 50px;
  background-color: #eee
}
</style>
