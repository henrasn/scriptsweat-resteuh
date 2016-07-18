var Model = require('../models/keranjangModel').main;
var produkModel = require('../models/keranjangModel').prod;

var getKeranjang = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {
    '_id': 0
  }, (err, data) => {
    res.json(data)
  })
}

var addKeranjang = (req, res) => {
  Model.find({
    'idUser': req.params.idUser
  }, {}, (err, data) => {
    console.log(data);
    if (data[0] == null) {
      var newModel = new Model({
        idUser: req.params.idUser,
        produks: [{
          idProduk: req.body.idProduk,
          jumlah: req.body.jumlah,
          tanggal: new Date()
        }]
      })

      newModel.save((err) => {
        res.send(err)
      })
    } else {
      console.log('exist');
      var newProduk = new produkModel({
        idProduk: req.body.idProduk,
        jumlah: req.body.jumlah,
        tanggal: new Date()
      });

      console.log(newProduk.jumlah);
      console.log(newProduk.idProduk);

      Model.update({
        'idUser': req.params.idUser
      }, {
        $addToSet: {
          produks: newProduk
        }
      }, (err) => {
        console.log(err);
      })
    }
  })
}

var delKeranjang = (req, res) => {
  Model.update({
    idUser: req.params.idUser
  }, {
    $pull: {
      produks: {
        idProduk: req.body.idProduk
      }
    }
  }, (err) => {
    console.log(err);
  })
}

module.exports.getKeranjang = getKeranjang;
module.exports.addKeranjang = addKeranjang;
module.exports.delKeranjang = delKeranjang;
// module.exports