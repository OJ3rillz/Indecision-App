'use strict';

var nameVar = 'Andrew';
var nameVar = "Mike";
console.log('nameVar', nameVar);

var nameLet = 'jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

getPetName();
console.log(petName);
