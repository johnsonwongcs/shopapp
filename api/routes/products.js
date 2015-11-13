var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	//code for retrieving products
	models.Products.findAll().then(function(products){
		res.json({
			products:products
		});
	});
});


module.exports = router;