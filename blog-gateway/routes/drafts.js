const Router = require('koa-router')
const Draft = require('../services/draft')

const drafts = new Router()

drafts.post('/', async (ctx)=>{
    let draft = {
        title: ctx.request.body.title,
        createTime: new Date(),
        lastEditTime: new Date(),
        content: '',
        excerpt: '',
        article: null,
        draftPublished: false
    }

    await Draft.createDraft(draft)

    ctx.body = {success: true, data: draft}
    ctx.status = 200
})

module.exports = drafts