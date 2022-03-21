const mongoose = require("mongoose"),
{Schema} = mongoose,
requestShema = new Schema({
    text: {
        type: String,
    },
   
});

  
module.exports = mongoose.model("Request", requestShema);