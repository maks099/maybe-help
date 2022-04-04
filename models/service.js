const mongoose = require("mongoose"),
{Schema} = mongoose,
servicesShema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    sequenceNumber: {
        type: Number,
        unique: true,
        required: true
    },
  
});
  
module.exports = mongoose.model("Service", servicesShema);