<template>    
    <li class = "item">        
        <button @click = 'count++'>You clicked me {{count}} times.</button>
        <input type = "checkbox" v-model="checked"/>
        <slot name = "item" v-bind="{checked,count}"></slot>
    </li>
</template>

<script>
export default {
     props:['item'],
     data(){
         return {
            checked:false,
            count:0
        }
     }
}
</script>

<style scoped>
    .item{
        color:red
    }
</style>