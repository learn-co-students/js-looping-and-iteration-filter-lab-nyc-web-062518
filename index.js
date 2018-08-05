function findMatching(driversArray, name) {
  return driversArray.filter(function(driverName) {return name.toLowerCase() === driverName.toLowerCase()})
}

function fuzzyMatch(driversArray, partialName) {
  return driversArray.filter(
    function(driverName) {
      return driverName.startsWith(partialName)
    }
  )
}

function matchName(driversArray, name) {
  return driversArray.filter(
    function(driver) {
      return driver["name"] === name
    }
  )
}
