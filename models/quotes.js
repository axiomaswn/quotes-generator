var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quotesSchema = new Schema({
    quotes: String,
    author: String,
});

module.exports = mongoose.model('Quotes', quotesSchema);
