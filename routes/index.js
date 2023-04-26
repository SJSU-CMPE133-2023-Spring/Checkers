var express = require('express');
const {join} = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Checkers' });
});

/* GET themes page
* probably gonna make this a dropdown menu that can be accessed from anywhere instead of its own page
*/
router.get('/theme', function(req, res, next) {
  res.render('theme', { title: 'Checkers' });
});


router.get('/play', function(req, res, next) {
  res.render('play', { title: 'Checkers' });
});

module.exports = router;