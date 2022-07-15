const fs = require('fs');

const { Product } = require('./src/scripts/modules/Product.js')

const products = require('./src/data/products.json');

const options = {
  name: 'яйцо обычное',
  weight: 150,
  calories: 90,
  proteins: 2,
  fats: 1,
  carbohydrates: 70,
}

const p = new Product(options)

products[p.name] = p;

fs.writeFile('./src/data/products.json', JSON.stringify(products), err => {console.log(err)})