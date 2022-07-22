const fs = require('fs');

const productElements = require('../../../config/default.json').productElements

const productsComposition = require('../../data/products.json')
class Meal {
  constructor(options) {
    this.products = options.products;
    this.date = options.date;
    this.name = options.name || Meal._createName();
    this.composition = {}
    productElements.forEach(element => this.composition[element] = 0)
  }

  static _createName(){
    const hours = this.date.getHours();
    if (hours <= 12) {
      return 'breakfast'
    } else if (hours >= 12 && hours <= 16) {
      return 'lunch'
    } else {
      return 'dinner'
    }
  }

  countComposition() {
    this.composition.weight = this.products.reduce((totalWeight, product) => totalWeight + product.weight, 0)
    this.products.forEach((product) => {
      productsComposition[product.name].number += product.number
      productsComposition[product.name].weight += product.weight

      productElements.forEach((param) => {
        this.composition[param] += Math.round(productsComposition[product.name][param] * product.weight / 10) / 10;
      });
    });

    fs.writeFile('./src/data/products.json', JSON.stringify(productsComposition), (err) => {
      if (err) {
        throw err;
      }
    });

    return this.composition;
  }
}

module.exports = { Meal }