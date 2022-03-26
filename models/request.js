const mongoose = require("mongoose"),
{Schema} = mongoose,
requestShema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    placesCount: {
        type: Number,
        required: true
    },
    shortMesage: {
        type: String,
        required: true,
        max: 100 
    },
   
});
  
module.exports = mongoose.model("Request", requestShema);