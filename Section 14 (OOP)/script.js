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

// //
// //
// // 218 Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer science');
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;

// //
// //
// // 219 Coding Challenge #3
// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

// const EV = function (mark, speed, charge) {
//   Car.call(this, mark, speed);
//   this.charge = charge;
// };

// // // Linking prototypes
// EV.prototype = Object.create(Car.prototype);
// // // Changing constructor
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.mark} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(67);
// tesla.accelerate();

// //
// //
// // 220 Inheritance Between "Classes": ES6 Classe
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
// // New class extend and super
// class StudentCl extends PersonCl { // !!!!!!!!!!!!!!!
//   constructor(fullName, birthYear, course) {
//     // Always first
//     super(fullName, birthYear); // !!!!!!!!!!
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I'm ${2037 - this.birthYear} years old`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'CS');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// //
// //
// // 221 Inheritance Between "Classes": Object.create
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

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2011, 'CS');
// jay.introduce();
// jay.calcAge();
// console.log(jay);

// //
// //
// // 222-223-224 Another Class Example - Encapsulation: Protected Properties and Methods - Encapsulation: Private Class Fields and Methods
// class Account {
//   // 1) Public fields
//   locale = navigator.language;

//   // 2) Private fileds (with # symbol)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//   }

//   // 3) Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   // Public interface API
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//     return this;
//   }
//   // 4) Private methods (not realy implemented)
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('VI', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);

// //
// //
// // 225 Chaining Methods
// acc1.deposit(300).deposit(500).withdraw(34).requestLoan(25000).withdraw(5000);
// console.log(acc1.getMovements());

//
//
// 227 Coding Challenge #3
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK
*/
class CarCl {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(mark, speed, charge) {
    super(mark, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.mark} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    console.log('Charged');
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
