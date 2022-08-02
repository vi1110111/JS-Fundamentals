'use strict';

// //
// //
// // 208 Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// const vi = new Person('VI', 2001);
// // Steps when function is called
// // 1. New empty object is created {}
// // 2. function is called. this = {} new empty object
// // 3. {} linked to prototupe
// // 4. function automatically return {}
// console.log(vi);
