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
                    <p>{{tag.label}} <i class = "cubeic-add" @click = "addCart($event, tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <div class = "ball-wrap">
            <transition
                @before-enter = "beforeEnter"
                @enter = "enter"
                @after-enter = "afterEnter"
            >
                <div class = "ball" v-if = "ball.show">
                    <div class = "inner">
                        <i class = "cuberic-add"></i>
                    </div>
                </div>
            </transition>
        </div>
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

            ],
            ball:{
                show:true,
                el:''
            }
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
        },
        //添加商品到购物车
        addCart(e,tag){
            //alert(tag.label)
            this.$store.commit('setCarts', tag)
            //显示添加
            this.ball.show = true
            //获取点击的元素
            this.ball.el = e.target
        },
        beforeEnter(el){
            //移动到点击的位置
            //获取点击位置
            const dom = this.ball.el
            const rect = dom.getBoundingClientRect()
            const x = rect.left - window.innerWidth * 0.7
            const y = -(window.innerHeight - rect.top)
            el.style.display = 'block'
            el.style.transform = `translate3d(0,${y}px,0)`
            const inner = el.querySelector('.inner')
            inner.style.transform = `translate3d(${x}px,0,0)`
        },
        enter(el, done){
            document.body.offsetHeight 
            el.style.transform = `translate3d(0,0,0)`
            const inner = el.querySelector('.inner')
            inner.style.transform = `translate3d(0,0,0)`
            el.adEventListener('transitioned',done)
        },
        afterEnter(el){
            this.ball.show = false
            el.style.display = 'none'
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
    .ball-wrap
        .ball 
            position fixed
            left 70%
            bottom 10px
            z-index 1003
            color red
            transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width 16px
                height 16px
                transition all 1s linear 
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
                    .cubeic-add
                        font-size 18px
        
</style>