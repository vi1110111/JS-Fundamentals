'use strict';

//
//
// 208 Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const vi = new Person('VI', 2001);
// Steps when function is called
// 1. New empty object is created {}
// 2. function is called. this = {} new empty object
// 3. {} linked to prototupe
// 4. function automatically return {}
console.log(vi);

//
//
// 209 Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
vi.calcAge();
// !!!
console.log(vi.__proto__ === Person.prototype);

Person.prototype.species = 'Homo';
console.log(vi.species);

console.log(vi.hasOwnProperty('firstName'));

//
//
// 211 Prototypal Inheritance on Built-In Objects
console.log(vi.__proto__);
console.log(vi.__proto__.__proto__);
console.log(vi.__proto__.__proto__.__proto__);

const arr = [5, 7, 3, 7, 8, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
