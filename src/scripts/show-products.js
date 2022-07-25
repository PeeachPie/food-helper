const foods            = require('../data/foods.json')
const { Product }      = require('../scripts/modules/FoodLevels.js')
const { ActionButton } = require('../scripts/modules/Buttons.js')

function getInputs() {
  return document.querySelectorAll('.option');
}

function addNewProduct() {
  const inputs  = getInputs(),
        options = {}

  const inputLen = inputs.length
  for (let i = 0; i < inputLen; i++) {
    const input = inputs[i]
    options[input.id] = input.type === 'text' ? input.value : parseInt(input.value)
    input.value = ''
  }
  Product.create(options)
}

const btnAddNewProduct = new ActionButton(
  document.querySelector('#btn-add-new-product'),
  addNewProduct
)  

// document.querySelector('btn-add-new-product').addEventListener('click', addNewProduct)

// TODO: add creator of new products

function displayProducts() {
  let foodsContainer = document.querySelector('.products-container')

  for (let foodName in foods) {
    let food = Product.createElement(foods[foodName])
    foodsContainer.append(food)
  }
}

function displayInputs() {
  document.querySelector('.composition-of-product').append(Product.createInputs())
}

window.addEventListener('load', displayProducts)
window.addEventListener('load', displayInputs)