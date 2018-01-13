var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usersFilePath = path.join(__dirname, 'users.min.json');

  apiRouter.get('/users', function(req, res){
      var readable = fs.createReadStream(usersFilePath);
      readable.pipe(res);
  });

  res.send('respond with a resource');
});

module.exports = router;
