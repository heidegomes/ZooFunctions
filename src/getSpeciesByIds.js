const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  
  
  return [{
    id,
    name,
    popularity,
    location,
    availability,
    residents:
      { name, sex, age },
  }];
 
}

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
