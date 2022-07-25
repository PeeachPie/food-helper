const fs = require('fs');

const { addToJSON } = require('./utils.js')

const productElements = require('../../../config/default.json').productElements

const foodsComposition = require('../../data/foods.json')

class Food {
  constructor(products) {
    this.composition = {};
    this.products = products;
  }

  static create(products) {

  }

  static _countComposition() {
    this.composition.weight = this.products.reduce((totalWeight, product) => totalWeight + product.weight, 0)
    this.products.forEach((product) => {
      productElements.forEach((param) => {
        this.composition[param] += Math.round(productsComposition[product.name][param] * product.weight / 10) / 10;
      });
    });

    // fs.writeFile('./src/data/products.json', JSON.stringify(productsComposition), (err) => {
    //   if (err) {
    //     throw err;
    //   }
    // });

    return this.composition;
  }

}