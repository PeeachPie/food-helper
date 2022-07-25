// const fs = require('fs');

const { addToJSON, countComposition } = require('./utils.js')

const foodElements = require('../../../config/default.json').foodElements

const foodsComposition = require('../../data/foods.json')
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

module.exports = { Meal }