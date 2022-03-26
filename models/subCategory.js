const mongoose = require("mongoose"),
{Schema} = mongoose,
subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});
  
module.exports = mongoose.model("Subcategory", subCategorySchema);