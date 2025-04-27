const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"],
    },
    quantity:{
        type: Number,
        required: true,
        deafult:0
    },
    price: {
        type: Number,
        required: [true, "please enter product price"],
        maxLength: [8, "price cannot exceed 8 characters"],
    },
    description: {
        type: String,
        required: [false, "please enter product description"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    },
    {
        timestamps: true,
    }
);

const Product =mongoose.model("Product", productSchema);

module.exports = Product