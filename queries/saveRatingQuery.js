var Model = require('../models/ratingModel');
var faker = require('faker');

module.exports = (req, res) => {
  console.log(req.body);
  var newModel = new Model.main({
    idProduk: faker.random.number(999999),
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
}