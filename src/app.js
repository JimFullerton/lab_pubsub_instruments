const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
});
