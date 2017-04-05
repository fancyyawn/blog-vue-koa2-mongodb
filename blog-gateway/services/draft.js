const Draft = require('../models').Draft

exports.createDraft = (draft)=>{
    return Draft.create(draft)
}