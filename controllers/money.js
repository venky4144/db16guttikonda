var money = require('../models/money'); 
 
// List of all moneys 
exports.money_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: money list'); 
}; 
 
// for a specific money. 
exports.money_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: money detail: ' + req.params.id); 
}; 
 
// Handle money create on POST. 
exports.money_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: money create POST'); 
}; 
 
// Handle money delete form on DELETE. 
exports.money_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: money delete DELETE ' + req.params.id); 
}; 
 
// Handle money update form on PUT. 
exports.money_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: money update PUT' + req.params.id); 
}; 