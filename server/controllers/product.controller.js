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

module.exports.getAllProducts = (req, res)=>{
    console.log("getting products")
    Product.find({})
    .then(products=>res.json(products))
    .catch(err=>res.json(err))
}

module.exports.getProduct = (req, res)=>{
    Product.findOne({_id:req.params.id})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))
}

module.exports.updateProduct = (req, res)=>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err=> res.json(err))
}

module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation=>res.json(deleteConfirmation))
    .catch(err => res.json(err))
}