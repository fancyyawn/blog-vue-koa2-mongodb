const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const router = require('./routes')
const config = require('config-lite')
const bodyparser = require('koa-bodyparser')
const utils = require('./utils')

app.use(static(__dirname+'/public'))

app.context.config = config
app.use(bodyparser())

app.use(router.routes())

app.on('error', (err, ctx) =>
    console.log('server error', err, ctx)
)

app.listen(config.port, function () {
    console.log('Server listening on: ', config.port);
});