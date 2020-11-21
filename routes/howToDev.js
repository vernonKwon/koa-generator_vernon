const router = require('koa-router')()

router.get('/', ctx => {
    ctx.body = "hello world"
})

router.get('/params/:id', ctx => {
    const id = ctx.params
    ctx.body = id
})

// http://hostServer/howToDev/query?keyOne=value&keyTwo=value2
router.get('/query', ctx => {
    const { keyOne, keyTwo } = ctx.request.query
    ctx.body = { keyOne, keyTwo }
})

router.post('/body', ctx => {
    const data = ctx.request.body
    ctx.body = data
})

module.exports = router
