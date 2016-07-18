var model = require('../models/ratingModel').main;
var rating = require('../models/ratingModel').model;

var getRating = (req, res) => {
  model.find({
    'idProduk': req.params.idProduk
  }, {}, (err, data) => {
    res.json(data)
  })
}

var addRating = (req, res) => {
  // console.log(req.params.idProduk);
  // console.log(req.body.user);
  // console.log(req.body.rate);
  // console.log(req.body.comment);
  model.find({
    'idProduk': req.params.idProduk
  }, {}, (err, data) => {
    if (data[0] == null) {
      console.log('doesnt exist');
      var newModel = new model({
        idProduk: req.params.idProduk,
        rating: [{
          user: req.body.user,
          rate: req.body.rate,
          comment: req.body.comment
        }]
      });

      newModel.save((err) => {
        if (err)
          res.send(err)
        else
          res.send("success")
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
          rating: newRating
        }
      }, (err) => {
        console.log(err);
      })
    }
  })
}

module.exports.getRating = getRating;
module.exports.addRating = addRating;