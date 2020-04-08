var mongoose = require('mongoose'); 
mongoose.Promise = global.Promise

// In Java, this class would have looked something like the following.

// public Movie {
//     private String title;
//     private int year;
//     private String genre;
//     private Review[] reviews;
    
//     ...
// }


//First we must define a schema

var reviewSchema = new mongoose.Schema({
    rating:{
        type: Number,
        min: 0.0,
        max: 5.0,
        required: true
    },
    comment: {
        type: String
    },
    author: {
        type: String,
        required: true
    }
}); 


//Let's define a second schema 

var movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true 
    },
    genre:{
        type: String,
        required: true 
    },
    reviews:[reviewSchema]
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie; 