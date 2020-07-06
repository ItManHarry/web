module.exports = {
    configureWebpack:{
        devServer:{
            port:80,    //配置端口号
            open:true,  //启动自动打开网页
            //Mock配置
            //每次更改必须重启项目才能生效
            before(app){              
              let users = [
                {name:'user01',pwd:'123456'},
                {name:'user02',pwd:'123456'},
                {name:'user03',pwd:'123456'},
              ]
              //用户注册
              app.get('/api/register',(request, response) => {
                const {name,pwd} = request.query
                const count = users.filter(v => v.name == name).length
                if(count > 0)
                  response.json({
                    success:false,
                    message:'用户已存在',
                    data:{
                      
                    }
                  })
                else
                  response.json({
                    success:true,
                    message:'注册成功',
                    data:{
                      
                    }
                  })
              })
              //用户登录
              let tokenKey = 'qwerasdfzxcv123'
              app.get('/api/login', (request, response) => {
                const {name,pwd} = request.query
                const count = users.filter(v => v.name == name).length
                if(count <= 0){
                  response.json({
                    code:0,
                    message:'用户不存在,请注册!',
                    token:'null'
                  })
                }else if(name == 'user01' && pwd == '123456'){
                  response.json({
                    code:1,
                    message:'登录成功!',
                    token:tokenKey+'-'+name+'-'+(new Date().getTime()*60*60*1000)
                  })
                }else{
                  response.json({
                    code:2,
                    message:'账号或密码错误!',
                    token:'null'
                  })
                }
              })
              //轮播图
              app.get('/api/banners', (req, res) => {
                res.json({
                  data:[
                    {
                      url: '/login',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                  ]
                })
              })
              //滚动分类接口
              app.get('/api/rollings', (req, res) => {
                res.json({
                  data:[
                    [
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'数码'
                      },
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'数码'
                      },
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'数码'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'数码'
                      }
                    ],[
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'美食'
                      },
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'美食'
                      },
                      {
                        url: '/login',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                        label:'美食'
                      },
                      {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                        label:'美食'
                      }
                    ]
                  ]
                })
              })
            }
        }        
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
