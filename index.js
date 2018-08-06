// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(n => n.toLowerCase() == name.toLowerCase());
}

function fuzzyMatch(drivers, name){
  return drivers.filter(n => n.charAt(0).toLowerCase() == name.charAt(0).toLowerCase());
}

function matchName(drivers, name){
  return drivers.filter(function(d){
    return d.name === name;
  });
}
