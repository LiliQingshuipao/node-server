var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', function(req,res,next) {
  res.json({ name: 'myapp',success:true})
} )
module.exports = router;
