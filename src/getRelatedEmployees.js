const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
// console.log(employees);

// function isManager(id) {
//   for (let i = 0; i < employees.length; i += 1) {
//     const person = employees[i];
//     const { managers } = person;
//     for (let j = 0; j < managers.length; j += 1) {
//       const managerId = managers[j];
//       if (managerId === id) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function getRelatedEmployees(id) {
//   const ret = [];
//   for (let i = 0; i < employees.length; i += 1) {
//     const person = employees[i];
//     const { managers } = person;
//     for (let j = 0; j < managers.length; j += 1) {
//       const managerId = managers[j];
//       if (managerId === id) {
//         ret.push(`${person.firstName} ${person.lastName}`);
//       }
//     }
//   }
//   return ret;
// }

// function isManager(id) {
//   const ret = employees
//     .map((e) => e.managers)
//     .flatMap((n) => n)
//     .some((i) => i === id);
//   return ret;
// }

// function isManager(id) {
//   return employees
//     .map((e) => e.managers)
//     .flatMap((n) => n)
//     .some((i) => i === id);
// }

function isManager(id) {
  employees.forEach((e) => {
    const { managers } = e;
    managers.forEach((i) => {
      if (i === id) {
        return true;
      }
    });
  });
  return false;
}

function getRelatedEmployees(id) {
  const ret = [];
  employees.forEach((e) => {
    const { managers } = e;
    managers.forEach((i) => {
      if (i === id) {
        ret.push(`${e.firstName} ${e.lastName}`);
      }
    });
  });
  return ret;
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0993'));
