const instrumentFamilyData = require('../data/instrument_family_data.js');
const PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {

  constructor(data) {
    this.data = data;
  };

  publishInit() {
    PubSub.publish('InstrumentFamilies:all-families-ready', this.data);
  };

  bindEvents() {
    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamily(selectedIndex);
    });
  };

  publishFamily(index) {
    const newFamily = this.data[index];
    PubSub.publish('InstrumentFamilies:new-family-ready', newFamily)
  };

};

module.exports = InstrumentFamilies;
