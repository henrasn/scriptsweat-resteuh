var Model = require('../models/keranjangModel').main;
var produkModel = require('../models/keranjangModel').prod;

var getKeranjang = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {
    '_id': 0,
    '__v': 0
  }, (err, data) => {
    if (err) {
      res.json({
        "error": true,
        "message": err
      })
    } else {
      res.json({
        data: {
          keranjang: data
        }
      })
    }
  })
}

var addKeranjang = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {}, (err, data) => {
    console.log(data[0]);
    if (data[0] == null) {
      var newModel = new Model({
        idUser: req.params.idUser,
        produks: [{
          idProduk: req.body.idProduk,
          jumlah: req.body.jumlah,
          tanggal: new Date()
        }]
      })

      newModel.save((err, body) => {
        if (err)
          res.json({
            error: true,
            message: err
          })
        else {
          res.json({
            data: {
              keranjangAdd: body
            }
          })
        }
      })
    } else {
      var newProduk = new produkModel({
        idProduk: req.body.idProduk,
        jumlah: req.body.jumlah,
        tanggal: new Date()
      });

      Model.update({
        'idUser': req.params.idUser
      }, {
        $addToSet: {
          produks: newProduk
        }
      }, (err, body) => {
        if (err)
          res.json({
            error: true,
            message: err
          })
        else {
          res.json({
            data: {
              keranjangAdd: body
            }
          })
        }
      })
    }
  })
}

var delKeranjang = (req, res) => {
  console.log(req.body.idProduk);
  Model.update({
    idUser: req.params.idUser
  }, {
    $pull: {
      produks: {
        idProduk: req.body.idProduk
      }
    }
  }, (err, body) => {
    if (err)
      res.json({
        error: true,
        message: err
      })
    else
      res.json({
        data: {
          keranjangDel: body
        }
      })
  })
}

module.exports.getKeranjang = getKeranjang;
module.exports.addKeranjang = addKeranjang;
module.exports.delKeranjang = delKeranjang;