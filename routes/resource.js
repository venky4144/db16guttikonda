var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var money_controller = require('../controllers/money'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// money ROUTES /// 
 
// POST request for creating a money.  
router.post('/money', money_controller.money_create_post); 
 
// DELETE request to delete money. 
router.delete('/money/:id', money_controller.money_delete); 
 
// PUT request to update money. 
router.put('/money/:id', 
money_controller.money_update_put); 
 
// GET request for one money. 
router.get('/money/:id', money_controller.money_detail); 
 
// GET request for list of all money items. 
router.get('/money', money_controller.money_list); 


 
module.exports = router; 