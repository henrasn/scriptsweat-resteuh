var Data = require('../models/produkmodel');

var getPromo = (req, res) => {
  Data.find({}, {
    'image': 1,
    'name': 1,
    'price': 1,
    '_id': 0
  }, (err, data) => {
    res.json(data)
  })
}

var search = (req, res) => {
  Data.find({
    'name': req.params.name
  }, {
    'image': 1,
    'name': 1,
    'price': 1,
    '_id': 0
  }, (err, data) => {
    res.json(data)
  })
}

var getAllData = (req, res) => {
  Data.find({
    'id': req.params.id
  }, {
    'image': 1,
    'name': 1,
    'price': 1,
    'short_description': 1,
    'gender': 1,
    'brand': 1,
    'childs': 1,
    '_id': 0
  }, (err, data) => {
    if (err)
      res.send(err)
    else
      res.json({
        data: data
      })
  })
}

var getProdukName = (req, res) => {
  Data.find({}, {
    'name': 1,
    '_id': 0
  }, (err, data) => {
    res.json(data)
  })
}

module.exports.getAllData = getAllData;
module.exports.getPromo = getPromo;
module.exports.search = search;
module.exports.getProdukName = getProdukName;