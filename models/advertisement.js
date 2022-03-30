const mongoose = require("mongoose"),
{Schema} = mongoose,
advertisementShema = new Schema({
    categoryId: {
        type: mongoose.ObjectId,
        required: true
    },
    subCategoryId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 10
    },
    longDescription: {
        type: String,
        max: 255
    },
    shortDescription: {
        type: String,
        max: 100
    },
    date: {
        type: Date,
        required: true
    },
    freePlacesCount: {
        type: Number,
        required: true
    },
    tags: [String],
    photo: {
        type: String
    },
    settlement: {
        type: String
    },
    phone: {
        type: String
    }
});
  
module.exports = mongoose.model("Advertisement", advertisementShema);