const Router = require('koa-router');

const router = new Router();

const dratfs = require('./drafts')

router.get('/', async(ctx)=>{
    ctx.redirect('/web/index.html')
});

router.use('/drafts', dratfs.routes())


module.exports = router
