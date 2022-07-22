const fs = require('fs');

const productElements = require('../../../config/default.json').productElements
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
    const products = require('../../data/products.json');

    products[this.name] = this;

    fs.writeFile('./src/data/products.json', JSON.stringify(products), (err) => {
      if (err) {
        throw err;
      }
    });
  }

  static create(options) {
    const product = new this(options);
    product._addToJSON();
    return product;
  }
}

module.exports = { Product }