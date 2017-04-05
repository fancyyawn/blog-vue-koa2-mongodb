const mongoose = require('mongoose');
const config = require('config-lite');

mongoose.connect(config.mongo.url, function (err) {
    if(err){
        console.error('connect to %s error: ', config.mongo.url, err.message);
        process.exit(1);
    }
});

exports.Draft = require('./draft');
exports.User = require('./user');
exports.Tag = require('./tag');