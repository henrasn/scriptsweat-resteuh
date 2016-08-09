var Model = require('../models/keranjangModel');
var faker = require('faker');

module.exports = (req, res) => {
  const date = new Date();
  var newModel = new Model.main({
    idUser: faker.random.number(999999),
    produks: [{
      idProduk: req.body.idProduk,
      jumlah: req.body.jumlah,
      tanggal: date.toLocaleString()
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
}