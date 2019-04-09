<template>
  <div>
    Name is : {{ name }}
    <br />
    Type is : {{ type }}
    <br />
    List is : {{ list }}
    <br />
    IsVisible is : {{ isVisible }}
    <br />
    <button @click="handleClick">change type</button>
  </div>
</template>

<script>
export default {
  name: "prop-demo",
  //inheritAttrs: false,
  //props: ['name', 'type', 'list', 'isVisible'],
  props: {
    name: {
        type:String,
        default:''
    },
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {        
        // 不要这么做、不要这么做、不要这么做
        // this.type = "warning";
        // 可以，还可以更好
        //this.onChange(this.type === "success" ? "warning" : "success");
        this.type  = (this.type == "success" ? "warning" : "success")
    }
  }
};
</script>