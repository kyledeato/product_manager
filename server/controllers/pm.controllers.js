const { request, response } = require("express");
const { Product } = require("../models/pm.model");
//create
module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
      title,
      price,
      description  
    })
    .then(product=>response.json(product))
    .catch(err=>response.json(err))
}

// get all
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err=>response.json(err))
}

// get one
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product=> response.json(product))
        .catch(err=>response.json(err))
}

//update
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedProduct=>response.json(updatedProduct))
        .catch(err=>response.json(err))
}

//delete
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err=> response.json(err))
}