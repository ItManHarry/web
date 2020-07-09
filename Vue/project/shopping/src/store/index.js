import Vue from 'vue'
import Vuex from 'vuex'
import { TabBar } from 'cube-ui'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token:'', //令牌
    carts:JSON.parse(localStorage.getItem('carts')) || []  //购物车
  },
  mutations: {
    //token
    setToken(state, token){
      state.token = token
    },
    //添加购物车
    setCarts(state, tag){
      for (let index = 0; index < state.carts.length; index++) {
        const element = state.carts[index];
        console.log('Add good title is : ' + element.title + ", tag label is : " + tag.label)
      }
      let good = state.carts.find(v => v.title == tag.label)
      if(good){
        good.count++
      }else{
        state.carts.push({title:tag.label, count:1})
      }
    },
    //购物数量加一
    cartAdd(state, index){
      state.carts[index].count++
    }
    ,
    //购物数量减一
    cartRemove(state, index){
      if(state.carts[index].count>1)
        state.carts[index].count--
      else
        if(window.confirm('确定要购物车中移除商品'))
          state.carts.splice(index, 1)
    },
    //清空购物车
    clearCart(state){
      state.carts = []
    }
  },
  actions: {
  },
  modules: {
  },
  //相当于vue的computed属性
  getters:{
    countSum:state=>{
      let num = 0
      state.carts.forEach(v => {
        num += v.count
      })
      return num
    }
  }
})
//监听mutations调用，即每次调用mutations里的方法时执行对应的操作
//此处实现数据持久化
store.subscribe((mutations, state)=>{
  localStorage.setItem('carts', JSON.stringify(state.carts))
})
export default store