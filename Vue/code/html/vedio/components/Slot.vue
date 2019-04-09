<template>
    <div>
        <slot></slot>
        <slot name = "title"></slot>
        <slot name = "item" v-bind = "{value:'This is a slot Vue demo'}"></slot>
    </div>    
</template>

<script>
export default {
    name:"SlotView"
}
</script>
