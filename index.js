// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driver){return driver.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, start){
  return drivers.filter(function (driver){return driver.slice(0, start.length).toLowerCase() === start.toLowerCase()})
}

function matchName(drivers, name){
  return drivers.filter(function (driver){return name === driver.name})
}
