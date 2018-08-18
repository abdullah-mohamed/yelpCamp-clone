var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// home page 
app.get('/', function(req, res){
	res.render('home');
});

// campgrounds page
app.get('/campgrounds', function(req, res){
	// get campgrounds from database

	// send campgrounds data and render the file 
	res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res){
	res.render('addform');
});

// add new campground
app.post('/campgrounds', function(req, res){
	// next three lines may not work
	var campName = req.body.campName;		//try req.query.campName
	var campDetails = req.body.campDetails;
	var campImage = req.body.campImage;

	// add data to database

	// redirect back to the campgrounds page
	res.redirect('/campgrounds'); 
});

app.listen(3000, function(){ 
	console.log('The YelpCamp server is activated at PORT 3000.');
});