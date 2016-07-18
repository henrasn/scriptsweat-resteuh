var express = require('express');
var prodQuery = require('../queries/produkQuery');
var rateQuery = require('../queries/ratingQuery');
var keranjangQuery = require('../queries/keranjangQuery');

var router = express.Router();

router.route('/produk/promo')
  .get(prodQuery.getPromo);
router.route('/produk/detail/:id')
  .get(prodQuery.getAllData);
router.route('/produk/:name')
  .get(prodQuery.search);

router.route('/keranjang/:idUser')
  .get(keranjangQuery.getKeranjang)
  .post(keranjangQuery.addKeranjang);
router.route('/keranjang/delete/:idUser')
  .post(keranjangQuery.delKeranjang);

router.route('/produk/rating/:idProduk')
  .get(rateQuery.getRating)
  .post(rateQuery.addRating);

module.exports = router;