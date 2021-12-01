var express = require('express'); 
const money_controlers= require('../controllers/money'); 
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET moneys */ 
router.get('/', money_controlers.money_view_all_Page ); 
module.exports = router; 

/* GET detail money page */ 
router.get('/detail', money_controlers.money_view_one_Page); 

/* GET create money page */ 
router.get('/create',secured, money_controlers.money_create_Page); 
 
/* GET create update page */ 
router.get('/update',secured, money_controlers.money_update_Page); 

/* GET create costume page */ 
router.get('/delete', secured,money_controlers.money_delete_Page); 