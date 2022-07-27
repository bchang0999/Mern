const {Product} = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// find all products
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}


//find one product
module.exports.oneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}


// update product 
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

// delete product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
    }