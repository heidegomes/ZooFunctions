const { species } = require('../data/zoo_data');

function countAnimalsBySpecieName(name) {
  const animalObj = species.filter((bicho) => (bicho.name === name));
  console.log(animalObj);

  return animalObj[0].residents.length;
}

function countAnimalsBySpecieSex(name, sex) {
  const animalObj = species.filter((bicho) => (bicho.name === name));

  let count = 0;
  for (let i = 0; i < animalObj[0].residents.length; i += 1) {
    const resident = animalObj[0].residents[i];
    if (resident.sex === sex) {
      count += 1;
    }
  }
  return count;
}

function countAnimals(objAnimal) {
  if (objAnimal === undefined) {
    const objRet = {};
    for (let i = 0; i < species.length; i += 1) {
      const specie = species[i];
      objRet[specie.name] = specie.residents.length;
    }
    return objRet;
  }

  if (objAnimal.sex === undefined) {
    return countAnimalsBySpecieName(objAnimal.specie);
  }

  return countAnimalsBySpecieSex(objAnimal.specie, objAnimal.sex);
}

module.exports = countAnimals;
