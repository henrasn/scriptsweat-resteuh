var express = require('express');
var prodQuery = require('../queries/produkQuery');
var rateQuery = require('../queries/ratingQuery');
var keranjangQuery = require('../queries/keranjangQuery');
var wishlistQuery = require('../queries/wishlistQuery');
var saveRating = require('../queries/saveRatingQuery');
var saveKeranjang = require('../queries/saveKeranjangQuery');

var router = express.Router();

router.route('/produk')
  .get(prodQuery.getData);
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
router.route('/new/keranjang')
  .post(saveKeranjang)

router.route('/produk/rating/:idProduk')
  .get(rateQuery.getRating)
  .post(rateQuery.addRating);
router.route('/produk/new/rating')
  .post(saveRating);

router.route('/produk/wishlist/:idUser')
  .get(wishlistQuery.getWishlist)
  .post(wishlistQuery.addWishlist)
router.route('/produk/wishlist/delete/:idUser')
  .post(wishlistQuery.delWishlist)

module.exports = router;