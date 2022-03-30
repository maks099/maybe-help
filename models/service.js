const mongoose = require("mongoose"),
{Schema} = mongoose,
servicesShema = new Schema({
    name: {
        type: String,
        required: true
    },
    sequenceNumber: {
        type: Number,
        required: true
    },
  
});
  
module.exports = mongoose.model("Service", servicesShema);