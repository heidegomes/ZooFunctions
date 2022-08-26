const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalActual = species.filter((bicho) => (bicho.name === animal)); // retorna um array com o objeto da especie
  console.log(animalActual);

  const animalsResidents = animalActual.map((bicho2) => (bicho2.residents)); // retorna um array com o objeto do animais residentes
  console.log(animalsResidents);

  const verifyAge = animalsResidents.every((bicho3) => (bicho3.age === age || bicho3.age > age)); // verifica se a idade de todos os residentes atendem a condição
  console.log(verifyAge);

  return verifyAge;
}
// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;