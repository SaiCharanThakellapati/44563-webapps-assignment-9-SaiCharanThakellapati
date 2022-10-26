var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var z = Math.floor(Math.random()*20);
  var x = Math.floor(Math.random()*20);
  var imulx = Math.imul(x,z);
  var logx = Math.log(x);
  var log10x = Math.log10(x);
  
  var y = Math.random()*20;
  var imuly = Math.imul(y,z);
  var logy = Math.log(y);
  var log10y = Math.log10(y);

  res.render('computation', 
  { x: x, y: y,z:z, title: 'Bonus by Thakellapati sai charan',
  titlex: 'Appling absolute values to functions',
  logx: logx, imulx:imulx, log10x:log10x,
  titley: 'Appling decimal values to functions',
  logy: logy, imuly:imuly, log10y:log10y,
})
});

module.exports = router;
