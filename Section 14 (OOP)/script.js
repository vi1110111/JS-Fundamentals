'use strict';

// //
// //
// // 208 Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const vi = new Person('VI', 2001);
// // Steps when function is called
// // 1. New empty object is created {}
// // 2. function is called. this = {} new empty object
// // 3. {} linked to prototupe
// // 4. function automatically return {}
// console.log(vi);

// //
// //
// // 209 Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// vi.calcAge();
// // !!!
// console.log(vi.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo';
// console.log(vi.species);

// console.log(vi.hasOwnProperty('firstName'));

// //
// //
// // 211 Prototypal Inheritance on Built-In Objects
// console.log(vi.__proto__);
// console.log(vi.__proto__.__proto__);
// console.log(vi.__proto__.__proto__.__proto__);

// const arr = [5, 7, 3, 7, 8, 1];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// //
// //
// // 212 Coding Challenge #1
// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK
// */
// const Car = function (mark, speed) {
//   this.mark = mark;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1, car2);
// car1.accelerate();
// car1.accelerate();
// car2.brake();

// //
// //
// // 213 ES6 Classes
// // class expression
// //const PersonCl = class {}
// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to .prototype property
//   // Instance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       console.log('Not a full Name');
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log('Hey There!!');
//     console.log(this);
//   }
// }
// const vi = new PersonCl('V I', 2001);
// console.log(vi);
// vi.calcAge();
// console.log(vi.age);
// PersonCl.hey();

// //
// //
// // 214 Setters and Getters
// const account = {
//   owner: 'Vi',
//   movements: [100, 6, 777, 23, 34],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 70;
// console.log(account.movements);

// //
// //
// // 215 Static Methods
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// // Static method
// Person.hey = function () {
//   console.log('Hey There!!');
// };
// Person.hey();

// //
// //
// // 216 Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// //
// //
// // 217 Coding Challenge #2
// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK
// */
// class CarCl {
//   constructor(mark, speed) {
//     this.mark = mark;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);

// console.log(ford.speedUS);

// ford.accelerate();
// ford.brake();
// ford.accelerate();

// ford.speedUS = 75;
// console.log(ford);
