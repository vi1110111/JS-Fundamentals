"use strict";

//
//
// 129 Arguments by value and reference
const fligth = "LH678";
const vi = {
  name: "vi",
  passport: 2323203,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LA999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 2323203) {
    console.log("checked in");
  } else {
    console.log("wrong passport");
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(vi);

checkIn(fligth, vi);
console.log(fligth);
console.log(vi);

//
//
// 128 Default parameters in functions
const bookings = [];

// Way of adding a default values ES6+
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");

createBooking("LH123", 2);
createBooking("LH123", undefined, 500);

createBooking("LH123", 2, 587);
