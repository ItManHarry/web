<template>
  <div>
    Name: {{ name || "--" }}
    <br />
    <input :value="name" @change="handleChange" />
    <br />
    <br />
    <div>
      <button @click="handleClick">重置成功</button>&nbsp;&nbsp;&nbsp;
      <button @click.stop="handleClick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-demo",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {      
      this.$emit("change", e.target.value);
    },
    handleClick(e) {      
      this.$emit("change", '');
      // 都会失败
      //e.stopPropagation();
    }
  }
};
</script>