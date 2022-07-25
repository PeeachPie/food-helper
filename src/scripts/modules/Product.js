// const fs = require('fs');

const foodElements = require('../../../config/default.json').foodElements

const { addToJSON, countComposition} = require('./utils.js')
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

module.exports = { Product }