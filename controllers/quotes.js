var Quotes = require("../models/quotes");

module.exports = {

  list: function(req, res, next){
    Quotes.find({}).then(function(quotes){
    res.json(quotes);
    })
  },

  random: function(req, res, next){
    Quotes.find({}).then(function(quotes){
    res.render('index', quotes[Math.floor(Math.random()*quotes.length)]);
    })
  },

  add: function(req, res, next){
    Quotes.create({
      quotes: req.body.quotes,
      author: req.body.author
    })
    .then(function(data){
      res.json(data)
    })
    .catch(function(err){
      res.json('silahkan isi data dengan lengkap')
    })
  }


}
