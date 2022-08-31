const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const personId = employees.find((idPerson) => idPerson.id === id);
  const specieAnimal = personId.responsibleFor[0];
  const animalId = species.find((idAnimal) => idAnimal.id === specieAnimal);
  const animalResidents = animalId.residents;
  const sortAge = animalResidents.sort((animalA, animalB) => animalB.age - animalA.age);
  return Object.values(sortAge[0]);
  // let oldestAnimal = animalResidents[0].age;
  // for (let i = 0; i < animalResidents.length; i += 1) {
  //   if (animalResidents[i].age > oldestAnimal) {
  //     oldestAnimal = animalResidents[i].age;
  //   }
  // }
  // const maiorIdadeAnimal = animalResidents.find((maiorIdade) => maiorIdade.age === oldestAnimal);
  // console.log(maiorIdadeAnimal);
  // return Object.values(maiorIdadeAnimal);
}


module.exports = getOldestFromFirstSpecies;
