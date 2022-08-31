const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const personId = employees.find((idPerson) => idPerson.id === id);
  const specieAnimal = personId.responsibleFor[0];
  const animalId = species.find((idAnimal) => idAnimal.id === specieAnimal);
  const animalResidents = animalId.residents;
  console.log(animalResidents);
  // const sortAge = animalResidents.sort((animalA, animalB) => animalA.age - animalB.age);
  // console.log(sortAge);
  // return sortAge[0]; //não retorna dentro do array.
  let oldestAnimal = 0;
  for (let i = 1; i < animalResidents.length; i += 1) {
    if (animalResidents[i].age > oldestAnimal) {
      // indice += i;
      oldestAnimal = animalResidents[i];
    }
  }
  // console.log(indice);
  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
