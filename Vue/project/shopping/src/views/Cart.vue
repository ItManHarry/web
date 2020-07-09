<template>
    <div>
        <div class = "goods" v-for="(good, index) in goods" :key = "index">
            {{good.title}}
            <div class = "goodRight">
                <i class = "cubeic-remove" @click = "removeGood(index)"></i>
                <span>{{good.count}}</span>
                <i class = "cubeic-add" @click = "addGood(index)"></i>
            </div>
        </div>
        <cube-button style = "margin: 10px 0">下单</cube-button>
        <cube-button @click = "clearCart">清空购物车</cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState({
            goods:state => state.carts
        })
    },
    methods:{
        //减少商品
        removeGood(index){
            this.$store.commit('cartRemove', index)
        },
        //增加商品
        addGood(index){
            this.$store.commit('cartAdd', index)
        },
        clearCart(){
            this.$store.commit('clearCart')
        }
    },

}
</script>
<style scoped lang = "stylus">
    .goods
        padding 10px
        text-algin left 
        .goodRight
            float right
        i 
            font-size 18px
</style>