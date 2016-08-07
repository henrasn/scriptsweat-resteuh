var Model = require('../models/wishlistModel');

var getWishlist = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {
    '_id': 0,
    '__v': 0
  }, (err, data) => {
    if (err)
      res.json({
        "error": true,
        "message": err
      })
    else
      res.json({
        data: {
          wishlist: data
        }
      })
  })
}

var addWishlist = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {}, (err, data) => {
    if (data[0] == null) {
      var newModel = new Model({
        idUser: req.params.idUser,
        produks: [req.body.idProduk]
      });

      newModel.save((err, body) => {
        if (err)
          res.json({
            "error": true,
            "message": err
          })
        else
          res.json({
            data: {
              wishlistAdd: body
            }
          })
      })
    } else {
      Model.update({
        'idUser': req.params.idUser
      }, {
        $addToSet: {
          produks: req.body.idProduk
        }
      }, (err, body) => {
        if (err)
          res.json({
            "error": true,
            "message": err
          })
        else
          res.json({
            data: {
              wishlistAdd: body
            }
          })
      })
    }
  })
}

var delWishlist = (req, res) => {
  Model.update({
    idUser: req.params.idUser
  }, {
    $pull: {
      produks: req.body.idProduk
    }
  }, (err, body) => {
    console.log(body);
    if (err)
      res.json({
        "error": true,
        "message": err
      })
    else if (body.nModified > 0)
      res.json({
        data: {
          wishlistDel: body
        }
      })
    else
      res.json({
        "error": true,
        "message": "delete failed"
      })
  })
}

module.exports.addWishlist = addWishlist;
module.exports.getWishlist = getWishlist;
module.exports.delWishlist = delWishlist;