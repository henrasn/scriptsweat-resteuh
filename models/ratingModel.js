var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
  idProduk: String,
  ratings: [{
    user: String,
    rate: Number,
    comment: String
  }]
})

var modelRating = new Schema({
  user: String,
  rate: Number,
  comment: String
})

module.exports.main = mongoose.model('rating', model, 'rating');
module.exports.model = mongoose.model('model', modelRating);