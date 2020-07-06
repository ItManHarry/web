<template>
    <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.url">
            <img class = "banner" :src="item.image">
            </a>
        </cube-slide-item>
    </cube-slide>
</template>
<script>
export default {
data() {
    return {
      items: []
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
  async created(){
      try{
          //获取轮播图数据
          const items = await this.$http.get('/api/banners')
          this.items = items.data
      }catch(error){
        console.log(error)
      }
  }
}
</script>
<style scoped lang = "stylus">
    #index
        a
            .banner
                display block
                width 100%
                height 175px
</style>