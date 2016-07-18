var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelKeranjang = new Schema({
  idUser: String,
  produks: [{
    idProduk: String,
    jumlah: Number,
    tanggal: String
  }]
});

var modelProduks = new Schema({
  idProduk: String,
  jumlah: Number,
  tanggal: String
})

module.exports.main = mongoose.model('keranjang', modelKeranjang, 'keranjang');
module.exports.prod = mongoose.model('modelKeranjang', modelProduks);