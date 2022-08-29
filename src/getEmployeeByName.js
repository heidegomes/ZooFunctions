const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeesPeople = employees.filter((people) => (people.firstName === employeeName));
  console.log(employeesPeople);

  // const employeesInfo = employeesPeople.map((people2) => )

}
getEmployeeByName('Emery');

module.exports = getEmployeeByName;
