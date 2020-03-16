var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', {
    currentUser: null,
    pageTitle: 'SequelCommerce Node.js Demo',
    pageDescription: 'Description...',
    serverData: {
      foo: 'bar',
    }
  });
});

module.exports = router;
