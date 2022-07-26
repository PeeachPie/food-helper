// const fs = require('fs');

const foodElements = require('../../../config/default.json').foodElements

const { addToJSON, countComposition} = require('./utils.js')

// const fs = require('fs');

// const { addToJSON } = require('./utils.js')

// const productElements = require('../../../config/default.json').productElements

const foodsComposition = require('../../data/foods.json')

class Product {
  constructor(options) {
    this.name = options.name;

    // composition of the product per 100 grams
    
    foodElements.forEach(element => this[element] = options[element] || 0);

    // weight of eaten
    this.weight = 0;

    // number of eaten
    this.number = 0;
  }

  _addToJSON() {
    addToJSON('../../data/foods.json', this.name, this)
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
    return productElement;
  }

  static createInputs() {
    let inputs = document.createElement('div')
    inputs.className = 'inputs'

    const inputTypesLength = foodElements.length

    for (let i = 0; i < inputTypesLength; i++) {
      let inputContainer = document.createElement('div')
      inputContainer.className = 'inputContainer'

      let inputType = document.createElement('div')
      inputType.innerHTML = foodElements[i] + ': '

      inputContainer.append(inputType)

      let input = document.createElement('input')
      input.id = foodElements[i]
      input.className = 'option'
      input.type = 'number'
      inputContainer.append(input)

      inputs.append(inputContainer)
    }

    return inputs;
  }
}

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


class Meal {
  constructor(options) {
    this.products = options.products;
    this.date = options.date;
    this.name = options.name || this._createName();
    this.composition = countComposition(this.products, foodsComposition)
  }

  static create(options) {
    const meal = new this(options)
    meal._addToJSON()
    return meal
  }
   _createName() {
    const hours = this.date.getHours();
    if (hours <= 12) {
      return 'breakfast'
    } else if (hours >= 12 && hours <= 16) {
      return 'lunch'
    } else {
      return 'dinner'
    }
  }

  _addToJSON() {
    addToJSON('../../data/foods.json', this.name, this)
  }
}

class Day {
  constructor () {

  }

  addMeal(meal) {
    
  }
}

module.exports = { 
  Product,
  Food,
  Meal,
  Day
 }