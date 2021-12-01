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
 
// for a specific Money. 
exports.money_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await money.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
// Handle money delete on DELETE. 
exports.money_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await money.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle money update form on PUT. 
exports.money_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await money.findById( req.params.id) 
        req.body.currency = 'yuan_new'
        // Do updates of properties 
        if(req.body.country)  
               toUpdate.country = req.body.country; 
        if(req.body.currency) toUpdate.currency = req.body.currency; 
        if(req.body.rate) toUpdate.rate = req.body.rate; 
        let result = await toUpdate.save(); 
        if(req.body.checkboxsale) toUpdate.sale = true; 
        else toUpdate.same = false; 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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


   // Handle a show one view with id specified by query 
exports.money_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await money.findById( req.query.id) 
        res.render('moneydetail',  
{ title: 'money Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.money_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('moneycreate', { title: 'money Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a money. 
// query provides the id 
exports.money_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await money.findById(req.query.id) 
        res.render('moneyupdate', { title: 'money Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.money_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await money.findById(req.query.id) 
        res.render('moneydelete', { title: 'money Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 