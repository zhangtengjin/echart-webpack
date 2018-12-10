# echart-webpack
echart图表实现小demo

目录结构

|- echart-webpack
    |- dist/     打包文件
    |- node_modules   
    |-src 
        |- components  额外组件
        |- pages   页面
            |- home  主页面计数器demo
                |- store 主页面store
                    |- actionCreators.js
                    |- constatns.js
                    |- index.js
                    |- reducer.js
            |- page1 page1页面  echart demo
                |- page1.js
        |- router 路由
            |- router.js
        |- store  项目store管理
            |- index.js 
            |- reducer.js
        |- index.html 
        |- index.js 入口文件
    .balbelrc
    .gitignore
    package.json
    webpack.dev.config.js
    webpack.prod.config.js
            
主页面实现了计数器demo，page1页面实现echar图表demo
