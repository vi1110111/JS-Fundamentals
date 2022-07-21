"use strict";
//
//
// 134

//
//
// 133 The call and Apply methods (this keyword)
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
