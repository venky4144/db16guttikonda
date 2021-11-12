var express = require('express'); 
const money_controlers= require('../controllers/money'); 
var router = express.Router(); 
 
/* GET moneys */ 
router.get('/', money_controlers.money_view_all_Page ); 
module.exports = router; 