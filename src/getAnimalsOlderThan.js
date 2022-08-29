const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalActual = species.filter((bicho) => (bicho.name === animal)); // retorna um array com o objeto da especie

  const residents = animalActual[0].residents;

  const verifyAge = residents.every((bicho) => bicho.age >= age);
  return verifyAge;
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
