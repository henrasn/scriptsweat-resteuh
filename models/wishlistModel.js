var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = new Schema({
  idUser: String,
  produks: [String]
})

module.exports = mongoose.model('wishlist', model, 'wishlist')