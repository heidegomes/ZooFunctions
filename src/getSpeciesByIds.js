const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

// function getSpeciesByIds(...ids) {
//   const ret = [];
//   for (let i = 0; i < ids.length; i += 1) {
//     const idParam = ids[i];
//     for (let j = 0; j < species.length; j += 1) {
//       const specie = species[j];
//       if (specie.id === idParam) {
//         ret.push(specie);
//         break;
//       }
//     }
//   }
//   return ret;
// }

function getSpeciesByIds(...ids) {
  const ret = [];
  ids.forEach((id) => {
    species.some((e) => {
      if (e.id === id) {
        ret.push(e);
        return true;
      }
      return false;
    });
  });
  return ret;
}

module.exports = getSpeciesByIds;
