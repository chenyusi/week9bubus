
var data = require('../data.json');
var piggy = require('../piggy.json')

exports.view = function(req, res){
	console.log(data.user_bubbles);
	res.render('index', {'bubble_data' : data.user_bubbles, 'piggy_data' : piggy.piggy_data});
};

exports.text_page = function(req, res){
	res.render('text');
}

exports.feedchanged = function(req, res){
	var old = new Boolean();
	old = false;
  	res.render('feed', {'old':old} );
  	//console.log(old);
}

exports.feed = function(req, res){
	var old = new Boolean();
	old = true;
  	res.render('feed', {'old':old}  );
  	//console.log(old);
}

