// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}
function fuzzyMatch(arr, partStr) {
  const length = partStr.length
  return arr.filter(function(name) {
    return name.slice(0, length).toLowerCase() === partStr.toLowerCase()
  })
}
function matchName(arr, str) {
  return arr.filter(function(name) {
    return name.name.toLowerCase() === str.toLowerCase()
  })
}
