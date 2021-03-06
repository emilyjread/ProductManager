const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    desc: {
        type: String,
        // required: true,
    }
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema)