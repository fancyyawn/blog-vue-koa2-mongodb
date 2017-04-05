const Router = require('koa-router');

const router = new Router();

const dratfs = require('./drafts')

router.get('/', async(ctx)=>{
    ctx.body = 'hello'
});

router.use('/drafts', dratfs.routes())


module.exports = router
