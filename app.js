const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Movies=require('./models/movie');

// Connect to Mongoose
mongoose.connect('mongodb://samanvitha:samanvitha@ds014648.mlab.com:14648/sam');
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})              
//var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/movie');
});

//get
app.get('/api/movies', (req, res) => {
	Movies.getmovie((err, movies) => {
		if(err){
			throw err;
		}
		res.json(movies);
	});
});


//get by id
app.get('/api/movies/:_id', (req, res) => {
	Movies.getmovieById(req.params._id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

//add by id
app.post('/api/movies', (req, res) => {
	var movie = req.body;
	Movies.addmovie(movie, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

//update by id
app.put('/api/movies/:_id', (req, res) => {
	var id = req.params._id;
	var movie = req.body;
	Movies.updatemovie(id, movie, {}, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});


//remove by id
app.delete('/api/movies/:_id', (req, res) => {
	var id = req.params._id;
	Movies.removemovie(id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.listen(process.env.PORT||3000);
console.log('Running on port 3000...');
