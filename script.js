"use strict";

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
