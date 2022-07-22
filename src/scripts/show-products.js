const products = require('../data/products.json')
const { Product } = require('../scripts/modules/Product.js')

// TODO: add creator of new products

let productsContainer = document.querySelector('.products-container')

for (let productName in products) {
  let product = Product.createElement(products[productName])
  productsContainer.append(product)
}