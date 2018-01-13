const express = require('express');
const router = express.Router();
const BaseConfig = require('./baseconfig.js');

router.get('/', function(req, res, next) {
  var config = new BaseConfig();
  res.json(config.getConfig('android'));    
});

module.exports = router;
