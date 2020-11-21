const Koa = require('koa')
const Router = require("koa-router")
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()

// 라우터 설정
router.use('/howToDev', require('./routes/howToDev').routes())
router.use('/restExample', require('./routes/restExample').routes())

// 라우터 적용 전에 bodyParser(middleware) 적용
app.use(logger())
app.use(bodyParser())

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods())


app.listen(8000, () => {
    console.log("서버 8000")
})


module.exports = app
