<template>    
    <div id = "index">
        <transition :name = "transitionName">
          <router-view class = "router"/>
        </transition>        
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler" 
            class = "footnav">
        </cube-tab-bar>
        <span class = "countSum">{{countSum}}</span>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  data () {
    return {
      transitionName:"slide-right",
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  computed:{
    ...mapGetters({
      countSum:'countSum'
    })
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
        case '首页':
          this.$router.push({path:'/home/main'})
          break
        case '分类':
          this.$router.push({path:'/home/lists'})
          break 
        case '搜索':
          this.$router.push({path:'/home/search'})
          break
        case '购物车':
          this.$router.push({path:'/home/cart'})
          break
        case '我的':
          this.$router.push({path:'/home/mine'})
          break
        default:
          this.$router.push({path:'/home/index'})
          break
      }
    }
  },
  created(){
    switch(this.$route.path){
      case '/home/main':
          this.selectedLabelDefault = '首页'
          break
      case '/home/lists':
          this.selectedLabelDefault = '分类'
          break
      case '/home/search':
          this.selectedLabelDefault = '搜索'
          break
      case '/home/cart':
          this.selectedLabelDefault = '购物车'
          break
      case '/home/mine':
          this.selectedLabelDefault = '我的'
          break
      default:
          this.selectedLabelDefault = '首页'
          break
    }
  }
}
</script>
<style scoped lang = "stylus">
    .cube-tab-bar.footnav
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab div
            font-size 10px
            padding-top 3px
        i 
            font-size 12px
    .router
      position  absolute
      width 100%
      transition all 0.8s ease 
    .slide-left-enter,.slide-right-leave-active
      opacity 0
      -webkit-transform   translate(100%, 0)
      transform translate(100%, 0)
    .slide-left-leave-active,.slide-right-center
      opacity 0
      -webkit-transform   translate(100%, 0)
      transform translate(-100%, 0)
    .countSum
      position  fixed
      bottom 33px
      right 23%
      z-index 1001
      width 18px
      height 18px
      line-height 18px
      border-radius 50%
      font-size 14px
      background  red
      color #fff
</style>