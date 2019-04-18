const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const Select = require('./views/select_view.js');
const Info = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const infoView = new Info();
  infoView.bindEvents();

  const selectView = new Select();
  selectView.bindEvents();
  selectView.publishChange();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.publishInit();
  instrumentFamilies.bindEvents();

});
