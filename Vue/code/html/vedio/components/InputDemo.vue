<template>
    <input :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    props:{
        value:String
    }
}
</script>

<style>

</style>
