"use strict";
// //
// //
// // 139 Codding challange 2
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

//
//
// 138 More Closures
// ex 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();

// // ex 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassengers(180, 3);
//
//
// 137 Closures
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();

// console.dir(booker);

//
//
// 136 IIFE Immediately Invoked Function Expressions
// (function () {
//   console.log("This will never run again");
// })();
//
//
///////////////////////////////////////
// Coding Challenge #1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
// Here are your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// HINT: Use many of the tools you learned about in this and the last section
// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(White option number)`
//       )
//     );
//     !isNaN(answer) && answer < 4 && answer >= 0 && this.answers[answer]++;

//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are: ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//
//
// 133-134 The call and Apply methods (this keyword) + The Bind method
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} fligth ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ fligth: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "vi");
// lufthansa.book(654, "st");

// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // call method first argument is this keyword
// book.call(eurowings, 23, "sa");
// console.log(eurowings);

// book.call(lufthansa, 999, "ev");
// console.log(lufthansa);

// // apply method recive array instead of arguments, and don't use in modern Js
// const fligthData = [678, "Ge"];
// book.apply(eurowings, fligthData);
// // instead of apply we could use call with spread operator
// book.call(eurowings, ...fligthData);

// console.log(eurowings);

// const bookEW = book.bind(eurowings);
// bookEW(45, "vi2");

// const booEW23 = book.bind(eurowings, 23);
// booEW23("vi3");
// // With event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// //lufthansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(23));

//
//
// 132 Functions that return functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Hey");
// greeterHey("Vi");
// greeterHey("St");

// greet("Hello")("Vi");
// greetArrow("Hello")("St");

//
//
// 131 Function that accept calback function
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// // Higher order function
// const transformer = function (str, fn) {
//   console.log(str);
//   console.log(fn(str));

//   console.log(`Transormed by: ${fn.name}`);
// };

// transformer("JavaScript is the best", upperFirstWord);

// transformer("JavaScript is the best", oneWord);
// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("🙌");
// };
// document.body.addEventListener("click", high5);
//
//
// 130 First class functions / Higher order functions

// First class functions means that all functions in language
// are variables too, it's just a property of lang, there is
// no first class functions in practice
// Higher order function in practive means function that recive
// or return callback functions

//
//
// 129 Arguments by value and reference
// const fligth = "LH678";
// const vi = {
//   name: "vi",
//   passport: 2323203,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LA999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 2323203) {
//     console.log("checked in");
//   } else {
//     console.log("wrong passport");
//   }
// };

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(vi);

// checkIn(fligth, vi);
// console.log(fligth);
// console.log(vi);

//
//
// 128 Default parameters in functions
// const bookings = [];

// // Way of adding a default values ES6+
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");

// createBooking("LH123", 2);
// createBooking("LH123", undefined, 500);

// createBooking("LH123", 2, 587);
