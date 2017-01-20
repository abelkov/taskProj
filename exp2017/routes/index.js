var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'My first app',
  	intro: 'Welcome to My first app. It’s going to help me managing my tasks and hone some skills' 
  });
});

module.exports = router;
