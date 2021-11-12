var money = require('../models/money'); 
 
// List of all money 
exports.money_list = async function(req, res) { 
    try{ 
        themoney = await money.find(); 
        res.send(themoney); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific money. 
exports.money_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: money detail: ' + req.params.id); 
}; 
 
// Handle money create on POST. 
exports.money_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new money(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"money_type":"goat", "cost":12, "size":"large"} 
    document.country = req.body.country; 
    document.currency = req.body.currency; 
    document.rate = req.body.rate; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle money delete form on DELETE. 
exports.money_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: money delete DELETE ' + req.params.id); 
}; 
 
// Handle money update form on PUT. 
exports.money_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: money update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.money_view_all_Page = async function(req, res) {
    try{
    themoney = await money.find();
    res.render('money', { title: 'Money Search Results', results: themoney });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };