const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const objRet = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((e) => {
    if (e.age < 18) {
      objRet.child += 1;
    } else if (e.age >= 18 && e.age < 50) {
      objRet.adult += 1;
    } else {
      objRet.senior += 1;
    }
  });
  return objRet;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const objEntrants = countEntrants(entrants);
  let soma = 0;
  Object.keys(objEntrants).forEach((key) => {
    soma += objEntrants[key] * prices[key];
  });
  return soma;
}

module.exports = { calculateEntry, countEntrants };
