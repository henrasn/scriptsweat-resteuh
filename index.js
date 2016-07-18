var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  router = require('./routes/produkRoute');

mongoose.connect('mongodb://127.0.0.1/produk');
// mongoose.connect('mongodb://restapi:henra12@ds011933.mlab.com:11933/dbrest');
var app = express();
var port = process.env.PORT || 3000;
// var router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port, (err) => {
  if (err)
    console.log(err);
  else
    console.log('running');
});