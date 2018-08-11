function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0,1) === string.slice(0,1))
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}
