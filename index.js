function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, namePartial) {
  const namePartialLength = namePartial.length;

  return drivers.filter(function(driverName) {
    return driverName.slice(0,namePartialLength) === namePartial;
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver_object){
    return driver_object.name === name
  })
}
