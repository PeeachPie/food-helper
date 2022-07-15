class Product {
  constructor(options) {
    this.name = options.name;

    // параметры продукта на 100 грамм
    this.calories      = options.calories;      // калорийность продукта в кклал
    this.proteins      = options.proteins;      // количество белков 
    this.fats          = options.fats;          // количество жиров
    this.carbohydrates = options.carbohydrates; // количество углеводов

    // вес съеденного продукта
    this.weight = 0;

    // количество съеденных штук
    this.number = 0;
  }
}



module.exports = { Product }