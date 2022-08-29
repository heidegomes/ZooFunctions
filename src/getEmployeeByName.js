const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
// console.log(employees);

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  for (let i = 0; i < employees.length; i += 1) {
    const person = employees[i];
    if (person.firstName === employeeName || person.lastName === employeeName) {
      return person;
    }
  }
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
