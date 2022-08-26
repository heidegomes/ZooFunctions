const data = require('../data/zoo_data');

console.log(data);

function getEmployeeByName(employeeName) {
  const employeesPeople = data.filter((people) => (people.firstName === employeeName));
  console.log(employeesPeople);

  // const employeesInfo = employeesPeople.map((people2) => )

}
getEmployeeByName('Wishart');

module.exports = getEmployeeByName;
