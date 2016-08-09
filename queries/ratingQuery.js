var model = require('../models/ratingModel').main;
var rating = require('../models/ratingModel').model;

var getRating = (req, res) => {
  model.find({
    'idProduk': req.params.idProduk
  }, {
    '_id': 0,
    '__v': 0
  }, (err, data) => {
    if (err)
      res.json({
        error: true,
        message: err
      })
    else
      res.json({
        data: {
          rating: data
        }
      })
  })
}

var addRating = (req, res) => {
  model.find({
    'idProduk': req.params.idProduk
  }, {}, (err, data) => {
    if (data[0] == null) {
      console.log('doesnt exist');
      var newModel = new model({
        idProduk: req.params.idProduk,
        ratings: [{
          user: req.body.user,
          rate: req.body.rate,
          comment: req.body.comment
        }]
      });

      newModel.save((err, body) => {
        if (err)
          res.json({
            error: true,
            message: err
          })
        else
          res.json({
            data: {
              ratingAdd: body
            }
          })
      })
    } else {
      console.log('exist');
      var newRating = new rating({
        user: req.body.user,
        rate: req.body.rate,
        comment: req.body.comment,
        autoIndexId: false
      })

      model.update({
        'idProduk': req.params.idProduk
      }, {
        $addToSet: {
          ratings: newRating
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
              ratingAdd: body
            }
          })
      })
    }
  })
}

module.exports.getRating = getRating;
module.exports.addRating = addRating;