var Model = require('../models/wishlistModel');

var getWishlist = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {
    '_id': 0,
    '__v': 0
  }, (err, data) => {
    if (err)
      res.send(err)
    else
      res.json(data)
  })
}

var addWishlist = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {}, (err, data) => {
    if (data[0] == null) {
      console.log('doesnt exist');
      var newModel = new Model({
        idUser: req.params.idUser,
        produks: [req.body.idProduk]
      });

      newModel.save((err) => {
        if (err)
          res.send(err)
        else
          res.send("success")
      })
    } else {
      console.log('exist');
      Model.update({
        'idUser': req.params.idUser
      }, {
        $addToSet: {
          produks: req.body.idProduk
        }
      }, (err) => {
        if (err)
          res.send(err)
        else
          res.send("success")
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
  }, (err) => {
    if (err)
      res.send(err)
    else
      res.send("success")
  })
}

module.exports.addWishlist = addWishlist;
module.exports.getWishlist = getWishlist;
module.exports.delWishlist = delWishlist;