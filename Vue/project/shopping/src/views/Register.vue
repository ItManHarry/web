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
                            required:true,
                            type:'string',
                            min:6,
                            max:15
                        },
                        trigger:'blur',
                        message:{
                            required:'密码不能为空',
                            min:'密码不能少于六个字符',
                            max:'密码不能多于十五个字符'
                        }
                    },{
                        type:'submit',
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault()
            console.log('执行注册')
            this.$http.get('/api/register',{params:this.model}).then(res => {

            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang = "stylus" scoped>
    .imgheader
        height 150px
        width 100%
</style>