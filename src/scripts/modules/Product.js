const fs = require('fs');

const productElements = require('../../../config/default.json').productElements

const { addToJSON } = require('./utils.js')
class Product {
  constructor(options) {
    this.name = options.name;

    // composition of the product per 100 grams
    
    productElements.forEach(element => this[element] = options[element] || 0);

    // weight of eaten
    this.weight = 0;

    // number of eaten
    this.number = 0;
  }

  _addToJSON() {
    addToJSON('../../data/products.json', this.name, this)
  }

  static create(options) {
    const product = new this(options);
    product._addToJSON();
    return product;
  }

  static createElement(product) {
    /* TODO: 
      add button to change product
      add button to show information about product
    */
    let productElement = document.createElement('div')
    productElement.className = 'product'
    productElement.innerHTML = product.name
    productElement.addEventListener('click', () => console.log(product.calories))  
    return productElement ;
  }
}

module.exports = { Product }