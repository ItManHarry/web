<template>
  <div id = "app">
        {{msg}}
        <hr>
        <EventDemo :name = "name" @change = "handleChangeEvent"></EventDemo>
        <hr>
        <div>
            <input type = "text" v-model = "info"/>
            <button @click = "handleClick">Add</button>
            <ul>                
                <todo-item v-for = "item in items" :key = "item">
                  <template v-slot:item = "itemProps">
                    <span :style = "{fontSize:'30px',color:itemProps.checked ? 'red' : 'green'}">{{item}} - {{itemProps.count}}</span>  
                  </template>                  
                </todo-item>
            </ul>   
            <hr>
            <Props name = "Jack" title = "Prop Demo" :type = "type" :list = "list" :isVisible = "isVisible"></Props> 
            <!--ClickCounter></ClickCounter--> 
            <hr>  
            <Slot>  
                <h2>This is a slot demo</h2>
                <template v-slot>
                  <h5>The default slot.</h5>
                </template>
                <template v-slot:title>
                  <h4>Slot title 1</h4>
                  <h4>Slot title 2</h4>
                </template>
                <template v-slot:item = "ps">
                  <p>Item slot-scope : {{ps.value}}</p>
                </template>
            </Slot> 
            <hr>  
            <InputDemo v-model="inputText"></InputDemo>
            <h2>Input text is : {{inputText}}</h2>
        </div>
    </div>  
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import ClickCounter from './components/ClickCounter.vue'
import EventDemo from './components/EventDemo.vue'
import Props from './components/Props.vue'
import Slot from './components/Slot.vue'
import InputDemo from  './components/InputDemo.vue'
export default {
  name: 'app',
  data:function(){     
      return {
          msg:'Hello Vue, welcome you.',
          info:'',
          items:[],
          name:"Harry",
          type:"success",
          list:[1,2,3,4],
          isVisible:true,
          inputText:''
      }
  },
  methods:{
      handleClick(){
          this.items.push(this.info)
          this.info = ''
      },
      handleChangeEvent(v){
        alert("Now the value v is : " + v)
        this.name = v
      }
  },
  components: {
    TodoItem,
    ClickCounter,
    EventDemo,
    Props,
    Slot,
    InputDemo
  }
}
</script>

<style>

</style>