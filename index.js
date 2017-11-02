const twit = require('twit')
const Koa = require('koa')
const router = require('router')()
const parser = require('koa-bodyparser')()
const Ilp = require('koa-ilp')
const plugin = require('ilp-plugin')()
const ilp = new Ilp({ plugin })
const app = new Koa()

const creds = require('./creds.json')
const twitter = new twit(JSON.parse(process.env.TWITTIUS_CREDENTIALS))

router.post('/tweet', ilp.paid({ price: 10000 }), async ctx => {
  const { status } = ctx.request.body

  await new Promise((resolve, reject) => {
    twitter.post('statuses', { status }, (err, data, response) => {
      if (err) reject(err)
      resolve(response)
    })
  })

  ctx.body = { success: true }
})

app
  .use(parser)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.TWITTIUS_PORT)
