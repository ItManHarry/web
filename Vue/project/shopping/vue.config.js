module.exports = {
    configureWebpack:{
        devServer:{
            port:80,  //配置端口号
            open:true,  //启动自动打开网页
            //Mock配置
            before(app){

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
