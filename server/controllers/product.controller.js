const {Product} = require('../models/product.model')

module.exports.index = (req, res)=>{
    res.json({
        message: "Hello World"
    })
}

module.exports.createProduct = (req, res)=>{
    const {name, price, desc} = req.body;
    Product.create({
        name, 
        price, 
        desc
    })
    .then(product=>res.json(product))
    .catch(err=>res.json)
}