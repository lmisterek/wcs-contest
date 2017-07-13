const express = require("express");

var router = express.Router();

// define routes

var todoItems = [
			{ id: 1, desc: 'foo'},
			{ id: 2, desc: 'bar'},
			{ id: 3, desc: 'baz'}
		];

router.get('/', function(req, res) {
	
	// load data from database here
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
})
router.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');
});



module.exports = router;