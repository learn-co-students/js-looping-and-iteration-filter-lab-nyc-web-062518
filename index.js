// Code your solution in this file
function findMatching (drivers, name) {
  const newDriver = [];

  for (const driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      newDriver.push(driver);
    }
  }
  return newDriver;
}


function fuzzyMatch(drivers, name) {
  const newDriver = [];

  for (const driver of drivers) {
    if (driver[0] === name[0]) {
      newDriver.push(driver);
    }
  }
  return newDriver;
}


function matchName(drivers, name) {
  const newDriver = [];

  for (const driver of drivers) {
    if (driver.name === name) {
      newDriver.push(driver);
    }
  }
  return newDriver;
}
