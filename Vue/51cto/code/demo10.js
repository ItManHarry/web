var Test = {
	template:`
		<div>
			<h2>Vue生命周期</h2>	
			<button @click = "msg+='1'">message + 1</button>
			<h3>{{msg}}</h3>
		</div>
	`,			
	data:function(){
		return {
			msg:"Hello Vue Test"
		}
	},
	//生命周期钩子函数
	beforeCreate(){
		//组件创建之前msg未初始化，所以是undefined
		console.log("Test组件创建之前msg值 : " + this.msg)
	},
	created(){
		//组件创建之后，msg可以正常使用了
		console.log("Test组件创建之后msg值 : " + this.msg)
	},
	beforeMount(){
		//DOM挂载前
		console.log("Test组件DOM挂载前 : " + document.body.innerHTML)
	},
	mounted(){
		//DOM挂载后
		console.log("Test组件DOM挂载后 : " + document.body.innerHTML)
	},
	beforeUpdate(){
		//数据更新前	
		console.log("数据msg更新前 : " + document.body.innerHTML)		
	},
	updated(){
		//数据更新后
		console.log("数据msg更新后 : " + document.body.innerHTML)				
	},
	beforeDestroy(){
		//组件销毁前	
		console.log("执行组件销毁" + document.body.innerHTML)		
	},
	destroyed(){
		//组件销毁后	
		console.log("组件已销毁" + document.body.innerHTML)	
	},
	deactivated(){
		//组件停用
		console.log("停用Test组件")
	},
	activated(){
		//组件启用
		console.log("启用Test组件")
	}
}
new Vue({
	el:"#app",
	components:{
		Test
	},
	template:`
		<div>
			<keep-alive><test ref = "test" v-if = "show"></test></keep-alive><br>
			<button @click="destroyTest">销毁组件Test	</button>		
		</div>
	`,			
	data:function(){
		return {
			msg:"Hello Vue",
			show:true
		}
	},
	methods:{
		destroyTest(){
			this.show = !this.show
		}
	},
	mounted(){
		console.log("Parent data msg is : " + this.msg + ", componet data msg is : " + this.$refs.test.msg)
	}
})