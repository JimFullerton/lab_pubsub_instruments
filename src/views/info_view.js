const PubSub = require('../helpers/pub_sub.js');

class Info {

  constructor() {
    this.infoDiv = document.querySelector('div#instrument-info');
  };

  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:new-family-ready', (evt) => {
      const family = evt.detail;
      this.writeInfo(family);
    });
  };

  writeInfo(family) {
    this.infoDiv.innerHTML = '';
    const familyName = document.createElement('h2');
    const familyDescription = document.createElement('p');
    const instrumentsInclude = document.createElement('h3');
    const instrumentList = document.createElement('ul');
    familyName.textContent = family.name;
    familyDescription.textContent = family.description;
    instrumentsInclude.textContent = 'Instruments include:';
    family.instruments.forEach((instrument) => {
      const newInstrument = document.createElement('li');
      newInstrument.textContent = instrument;
      instrumentList.appendChild(newInstrument);
    });
    this.infoDiv.appendChild(familyName);
    this.infoDiv.appendChild(familyDescription);
    this.infoDiv.appendChild(instrumentsInclude);
    this.infoDiv.appendChild(instrumentList);
  };
};

module.exports = Info;
