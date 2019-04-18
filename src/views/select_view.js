const PubSub = require('../helpers/pub_sub.js');

class Select {

  constructor() {
    this.element = document.querySelector('select#instrument-families');
  }

  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:all-families-ready', (evt) => {
      const fullDataSet = evt.detail;
      this.initialiseDropdown(fullDataSet);
    });
  };

  publishChange() {
    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    })
  }

  initialiseDropdown(dataset) {
    dataset.forEach( (element, indexNum) => {
      const newOption = document.createElement('option');
      newOption.textContent = element.name;
      newOption.value = indexNum;
      this.element.appendChild(newOption);
    });
  }


}

module.exports = Select;
