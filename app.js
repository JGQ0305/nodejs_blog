var express = require('express')

var path = require('path')

var app = express()

var bodyParser = require('body-parser')

var router = require('./router')

var session = require('express-session')

app.use('/public/', express.static(path.join(__dirname, './public/')))

// app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.set('views', path.join(__dirname, './views/')) // 默认访问views文件夹，设置默认访问路径

app.engine('html', require('express-art-template'))

// 创建parse application/x-www-form-urlencoded的编码解析
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 用Session来保存登录状态
// 下载安装、引入、配置
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.use(router)

app.listen(3000, function() {
    console.log('running success...')
})