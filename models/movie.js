const mongoose = require('mongoose');


const movieSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	rating:{
		type: String,
		required: true
	},
	lang:{
		type: String,
        required: true
	},
	genre:{
		type: String
	},
	pic:{
		type: String
	},
	url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const movie = module.exports = mongoose.model('movie', movieSchema);


module.exports.getmovie = (callback, limit) => {
	movie.find(callback).limit(limit);
}


module.exports.getmovieById = (id, callback) => {
	movie.findById(id, callback);
}


module.exports.addmovie = (food, callback) => {
	movie.create(food, callback);
}


module.exports.updatemovie = (id, food, options, callback) => {
	var query = {_id: id};
	var update = {
		name: food.name,
		rating: food.rating,
		lang: food.lang,
		dur: food.dur,
		pic: food.pic,
		url: food.url
	}
	movie.findOneAndUpdate(query, update, options, callback);
}


module.exports.removemovie = (id, callback) => {
	var query = {_id: id};
	movie.remove(query, callback);
}
