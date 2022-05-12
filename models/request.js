const mongoose = require("mongoose"),
{Schema} = mongoose,
requestShema = new Schema({
    surname: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    places_count: {
        type: Number,
        required: true
    },
    short_mesage: {
        type: String,
        required: true,
        max: 100 
    },
    userId: {
        type: Number,
        required: true
    },
    advertisementId: {
        type: String,
        required: true
    },
});
  
module.exports = mongoose.model("Request", requestShema);