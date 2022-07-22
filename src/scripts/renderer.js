const fs = require('fs');

const { Product } = require('./src/scripts/modules/Product.js')

const { Meal } = require('./src/scripts/modules/Meal.js')

// const meal = new Meal({
//   products: [
//     {
//       name: "bread",
//       weight: 300,
//       number: 3,
//     },
//     {
//       name: "milk",
//       weight: 452,
//       number: 3,
//     },
//   ],
//   date: new Date(),
//   name: "breakfast",
// });

// console.log(meal)

// console.log(meal.countComposition())

// const inp = document.querySelector('input');

// inp.addEventListener('change', () => {
//   console.log(inp.value);
//   console.log(new Date(inp.value))
// })


const bread = {
  name: 'bread',
  calories: 235,
  proteins: 7.9,
  fats: 1,
  carbohydrates: 48.3,
}

const milk = {
  name: 'milk',
  calories: 60,
  proteins: 2.9,
  fats: 3.2,
  carbohydrates: 4.7,
}

const sausage = {
  name: 'sausage',
  calories: 257,
  proteins: 16.4,
  fats: 25.4,
  carbohydrates: 3.1,
}

Product.create(sausage)
Product.create(bread)
Product.create(milk)


