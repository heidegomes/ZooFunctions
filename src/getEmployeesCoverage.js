const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesLocation(responsibleFor) {
  const obj = {
    species: [],
    locations: [],
  };
  responsibleFor.forEach((specieId) => {
    species.forEach((s) => {
      if (s.id === specieId) {
        obj.species.push(s.name);
        obj.locations.push(s.location);
        return true;
      }
    });
  });
  return obj;
}

function getWithEmptyParam() {
  const arrayRet = [];
  employees.forEach((e) => {
    const obj = {
      id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: [],
      locations: [],
    };
    const objTemp = getSpeciesLocation(e.responsibleFor);
    obj.species = objTemp.species;
    obj.locations = objTemp.locations;
    arrayRet.push(obj);
  });
  return arrayRet;
}

function getEmployeeFromFirstLastName(name) {
  return employees.find((e) => e.firstName === name || e.lastName === name);
}

function getEmployeeData(employee) {
  const objRet = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: [],
    locations: [],
  };
  const objTemp = getSpeciesLocation(employee.responsibleFor);
  objRet.species = objTemp.species;
  objRet.locations = objTemp.locations;
  return objRet;
}

function getEmployeeFromId(id) {
  return employees.find((e) => e.id === id);
}

function checkEmployee(employee) {
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeeByName(name) {
  const employee = getEmployeeFromFirstLastName(name);
  checkEmployee(employee);
  return getEmployeeData(employee);
}

function getEmployeeById(id) {
  const employee = getEmployeeFromId(id);
  checkEmployee(employee);
  return getEmployeeData(employee);
}

function getEmployeesCoverage(objParam) {
  if (objParam == null || objParam === undefined) {
    return getWithEmptyParam();
  }
  if (objParam.name) {
    return getEmployeeByName(objParam.name);
  }
  if (objParam.id) {
    return getEmployeeById(objParam.id);
  }
}

module.exports = getEmployeesCoverage;
