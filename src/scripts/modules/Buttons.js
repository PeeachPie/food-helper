class ActionButton {
  constructor(element, action, event='click') {
    this.element = element;
    this.callAction = action;
    this.element.addEventListener(event, this.callAction.bind(this))
  }

  // делает кнопку доступной
  able(typeOfButtonContent) {
    this.element.style.pointerEvents = "auto"
    typeOfButtonContent === 'text' 
    ? this.element.style.color = "#ebebeb" 
    : this.element.querySelector('path').style.fill = "#ebebeb" 
  }
  
  // делает кнопку недоступной
  unable(typeOfButtonContent) {
    this.element.style.pointerEvents = "none"
    typeOfButtonContent === 'text' 
    ? this.element.style.color = "#777777" 
    : this.element.querySelector('path').style.fill = "#777777"
  }
}

module.exports = { ActionButton }