var express = require('express');
var router = express.Router();
const  {renderFunction}  = require('../public/javascripts/renderFunction')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/first',function(req, res, next){
  let x = renderFunction(req.body)
  res.json({ name: x,success:true})
  // res.render('first', { test: 'welcome' });
})
module.exports = router;
