const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const sum = require('./sum')

router.get('/add/:a/:b', (ctx,next) => {
  const result = sum(parseFloat(ctm.params,a), parseFloat(ctx.paramsb))
  return ctx.body = {result}
})

app.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT || 3000 )
