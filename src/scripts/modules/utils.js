const fs = require('fs');

const foodElements = require('../../../config/default.json').foodElements

const productsComposition = require('../../data/products.json')

function writeJSON(pathToJSON, object) {
  fs.writeFile(pathToJSON, JSON.stringify(object), (err) => {
    if (err) { throw err; }
  });
}
 
function addToJSON (pathToJSON, name, object) {
  const data = require(pathToJSON);
  const absolutePathToJSON = require.resolve(pathToJSON)

  data[name] = object;

  writeJSON(absolutePathToJSON, data)
}

function countComposition(foods, foodsComposition) {
  const composition = {}
  foodElements.forEach(element => composition[element] = 0)

  composition.weight = foods.reduce((totalWeight, food) => totalWeight + food.weight, 0)

  foods.forEach((food) => {
    foodElements.forEach((param) => {
      composition[param] += Math.round(foodsComposition[food.name][param] * food.weight / 10) / 10;
    });
  });

  return composition;
}

module.exports = { 
  addToJSON, 
  writeJSON, 
  countComposition 
}