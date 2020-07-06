<template>
    <div>
        <img src = '../assets/register/logo.png' class = 'imgheader'> 
        <cube-form
            :model="model"
            :schema="schema"            
            @submit="submitHandler"
        >
        </cube-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            model:{
                name:'',
                pwd:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey:'name',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名!'
                        },
                        rules:{
                            required:true,
                            type:'string',
                            min:3,
                            max:15
                        },
                        trigger:'blur',
                        message:{
                            required:'用户名不能为空',
                            min:'用户名不能少于三个字符',
                            max:'用户名不能多于十五个字符'
                        }
                    },{
                        type:'input',
                        modelKey:'pwd',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码!',
                            type:'password',
                            eye:{
                                open:false
                            }
                        },
                        rules:{
                            required:true
                        },
                        trigger:'blur',
                        message:{
                            required:'密码不能为空'
                        }
                    },{
                        type:'submit',
                        label:'登录'
                    }
                ]
            }
        }
    },
    methods:{
        /*submitHandler(e){
            e.preventDefault()
            console.log('执行登录')
            this.$http.get('/api/login',{params:this.model}).then(res => {
                console.log(res)
                //alert("Code : " + res.data.code + ", message : " + res.data.message + ', token : ' + res.data.token)
                if(res.data.code == 0){
                    alert(res.data.message)
                    this.$router.push({path:'/register'})
                }
            }).catch(error => {
                console.log(error)
            })
        }*/
        async submitHandler(e){
            e.preventDefault()
            try{
                const result = await this.$http.get('/api/login', {params:this.model})
                console.log('Token : ' + result.token)
                if(result.code == 1){
                    alert(result.message)
                    //保存token
                    this.$store.commit('setToken', result.token)
                    window.localStorage.setItem('token', result.token)
                    //防止回退至登录页面,此处使用replace方法进行跳转
                    this.$router.replace({path:'/index'})
                }else{
                    alert(result.message)
                }
            }catch(error){
                console.log('Error : ' + error)
            }
        }
    }
}
</script>
<style lang = "stylus" scoped>
    .imgheader
        height 150px
        width 100%
</style>