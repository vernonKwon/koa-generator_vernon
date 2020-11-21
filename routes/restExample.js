const router = require('koa-router')()

const success = { status: "success" }
const fail = { status: "fail" }

router.post('/', ctx => {
    const { one, two } = ctx.request.body

    if (one.constructor === Number && two.constructor === Number) {
        ctx.body = { ...success, results: { value: one + two, message: "Why don't you use TS?" } }
    }
    else {
        ctx.status = 400
        ctx.body = fail
    }
})

module.exports = router
