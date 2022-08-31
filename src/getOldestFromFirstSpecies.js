const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const personId = employees.find((idPerson) => idPerson.id === id);
  const specieAnimal = personId.responsibleFor[0];
  const animalId = species.find((idAnimal) => idAnimal.id === specieAnimal);
  const animalResidents = animalId.residents;
  const sortAge = animalResidents.sort((animalA, animalB) => animalB.age - animalA.age);
  console.log(sortAge);
  return Object.values(sortAge[0]);
  // let oldestAnimal = animalResidents[0];
  // console.log(oldestAnimal);
  // for (let i = 0; i < animalResidents.length; i += 1) {
  //   if (animalResidents[i].age > oldestAnimal) {
  //     // oldestAnimal += i;
  //     oldestAnimal = animalResidents[i];
  //   }
  // }
  // return Object.values(oldestAnimal[0]);
  // console.log(indice);
}

// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = getOldestFromFirstSpecies;
