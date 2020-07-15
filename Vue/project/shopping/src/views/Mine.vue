<template>
    <div>
       <img src = '../assets/register/logo.png' class = 'imgheader'> 
       <ul>
           <li v-for = "item in sclist" class = "mineitems" @click = "itemClick(item)" :key = "item.label">
               <span class = "minetitle">{{item.label}}</span>
               <i class = "cubeic-arrow"></i>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sclist:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemClick(item){
            if(item.type == 'exit'){
                this.$store.commit('setToken', '')
                localStorage.removeItem('token')
                //跳转到login
                this.$router.replace({path:'/login'})
            }else{

            }
        }
    }
}
</script>
<style scoped lang = "stylus">     
    .imgheader
        height 150px
        width 100%    
    .mineitems
        font-size 14px
        text-align  left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eeeeee
        .minetitle
            display inline-block
            width 90%
</style>