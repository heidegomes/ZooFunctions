const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managerId = Object.value(employees);
  console.log(managerId);
  const personIsManager = employees.every((gerente) => gerente.id === id);
  console.log(personIsManager);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
