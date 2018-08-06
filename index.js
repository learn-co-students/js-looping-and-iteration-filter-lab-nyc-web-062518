// Code your solution in this file
function findMatching(drivers, name){
let passed = drivers.filter(function(driver){
  // debugger
  return (driver.toUpperCase() === name.toUpperCase())
})
return passed
}

function fuzzyMatch(drivers, name){
let passed = drivers.filter(function(driver){
  return (driver[0] === name[0])
})
return passed
}

function matchName(drivers, name){
let passed = drivers.filter(function(driver){
  return (driver.name === name)
})
return passed
}
