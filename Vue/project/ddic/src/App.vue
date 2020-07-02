<template>
  <div id="app">       
    <router-view :key = "$route.fullPath"/>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "app",
  components: {
    //HelloWorld
  },
  data(){
    return {
      radio:'1'
    }    
  }
};
</script>

<style>

</style>