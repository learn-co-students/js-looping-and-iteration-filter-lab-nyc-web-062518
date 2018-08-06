// Code your solution in this file
function findMatching(array, name){
  matches = array.filter(function (n) {return n.toLowerCase() === name.toLowerCase()})
  return matches
}

function fuzzyMatch(array, letters){
  console.log(letters.length)
  let start = letters.length
  matches = array.filter(function (n) {return n.substring(0,start) === letters})

  return matches
}

function matchName(array, string){
  matches = array.filter(function (n) {return n.name === string})
  return matches
}
