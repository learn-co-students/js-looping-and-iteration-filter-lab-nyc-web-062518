// Code your solution in this file
// function findMatching(function(name){
//   return drivers.name === name;
// });

function findMatching(array, name){
  return array.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, letters){
  let begginingLetters = letters.length
  return array.filter(function(name){
    return name.slice(0, begginingLetters) == letters
  })
}

function matchName(array, name){
  return array.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
