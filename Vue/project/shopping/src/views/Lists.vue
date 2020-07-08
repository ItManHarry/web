<template>
    <div class = "panels">
        <cube-scroll class = "leftPanel">
            <ul>
                <li v-for = "(list, index) in tabs" @click = "select(index)" :class = "list.active?'active':''" :key = "index">
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class = "rightPanel">
            <ul>
                <li v-for = "(tag, index) in tags" :key = "index">
                    <img :src = "tag.image"/>
                    <p>{{tag.label}}</p>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabs:[
                {
                    label:'热门推荐',
                    active:true
                },
                {
                    label:'手机数码',
                    active:false
                },
                {
                    label:'家用电器',
                    active:false
                },
                {
                    label:'家具产品',
                    active:false
                },
                {
                    label:'电脑办公',
                    active:false
                },
                {
                    label:'美妆护肤',
                    active:false
                },
                {
                    label:'口红',
                    active:false
                },
                {
                    label:'金银珠宝',
                    active:false
                },
            ],
            tags:[

            ]
        }
    },
    methods:{
        //获取分类项目对应的清单数据
        async getClassify(index){
            const result = await this.$http.get("/api/classify", {params:{type:index}})
            this.tags = result.data
        },
        //切换分类
        select(index){
            this.tabs.forEach((v, i) => {
                if(index == i)
                    v.active = true
                else    
                    v.active = false
            })
            this.getClassify(index)
        }
    },
    created(){
        //获取默认的分类数据
        this.getClassify(0)
    },
    mounted(){
        //设置滚动盒子的高度
        const leftPanel = document.querySelector(".leftPanel")
        const rightPanel = document.querySelector(".rightPanel")
        const bodyHeight = document.documentElement.clientHeight
        //alert('Body height : ' + bodyHeight)
        leftPanel.style.height = (bodyHeight - 50) + "px"
        rightPanel.style.height = (bodyHeight - 50) + "px"
    }
}
</script>
<style lang = "stylus">
    .panels
        display flex
        .leftPanel
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #ffffff
                color #333
                background #f8f8f8
                font-size 14px
            .active
                background #ffffff
                color #e93b3d 
        .rightPanel
            width 70%
            ul
                display flex
                flex-wrap wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img 
                        width 80px
                        height 80px
</style>