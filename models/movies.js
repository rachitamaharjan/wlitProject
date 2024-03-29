var mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    // _id : Number,
    name : String,
    description : String, 
    cast : String,
    genre : String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports  = mongoose.model('Movie',MovieSchema);