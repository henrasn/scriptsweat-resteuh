var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produkModel = new Schema({
  id: String,
  sku: String,
  type: String,
  configurable_attributes: [String],
  name: String,
  description: String,
  short_description: String,
  price: Number,
  thumbnail: String,
  small_image: String,
  image: String,
  media_gallery: [String],
  gender: String,
  brand: String,
  material_baju: String,
  momen_penggunaan: String,
  neck_type: String,
  childs: [{
    weight: Number,
    color: String,
    size: String,
    qty: Number
  }]
});

module.exports = mongoose.model('data', produkModel, 'data');