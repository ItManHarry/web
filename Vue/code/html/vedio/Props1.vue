<template>
    name : {{name}}
    <br/>
    type : {{type}}
    <br/>
    list: {{list}}
    <br/>
    isVisible: {{isVisible}}
    <br/>
    <button @click = "handleClick">Change Type</button>
</template>

<script>
export default {
    name:'propsDemo',
    inheritAttrs:false, //不继承父属性
    props:{
        name:String,
        type:{
            validator:function(value){
                return ['success','warning','danger'].includes(value)
            }
        },
        list:{
            type:Array,
            default: () => []
        },
        isVisible:{
            type:Boolean,
            default:false
        },
        onChange:{
            type:Function,
            default: () => {}
        }
    },
    methods:{
        handleClick(){
            this.onChange(this.type === "success" ? "warning" : "danger") 
        }
    }
}
</script>

<style>

</style>