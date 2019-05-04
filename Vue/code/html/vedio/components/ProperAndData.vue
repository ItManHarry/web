<template>
    <div>
        <p>props.info:{{info}}</p>
        <p>props.name:{{name}}</p>
        <p>props.list:{{list}}</p>
        <p>data.a:{{a}}</p>
        <p>data.b:{{b}}</p>
        <p>
            <button @click = "handleChange">change data.b</button>
        </p>
    </div>
</template>

<script>
export default {
    name:'ProperAndData',
    props:{
        info:Object,
        name:String,
        list:Array
    },
    data(){
        return {
            a:'Hello',
            b:'World'
        }
    },
    updated(){
        console.log('ProperAndData组件更新被触发')
    },
    methods:{
        handleChange(){
            this.b = "vue" + Date.now()
            console.log('data.b发生了变化，但是没有触发组件的更新，原因是没有在组件中使用该变量', this.b)
        }
    }
}
</script>

<style>

</style>
