const mongoose = require("mongoose"),
{Schema} = mongoose,
categoryShema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});
  
module.exports = mongoose.model("Category", categoryShema);