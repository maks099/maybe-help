const mongoose = require("mongoose"),
{Schema} = mongoose,
settlementShema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});
  
module.exports = mongoose.model("Settlement", settlementShema);