'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-07-22T23:36:17.929Z',
    '2022-07-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// 177
const formatMovementDate = function (date, locale) {
  const calcDaysPast = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPast(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};
// 179 Formating currencies
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// 147 Creating DOM elements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// 153 The reduce Method
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

// 155 The Magic of Chaining Methods
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

// 151 Computing Usernames
const user = 'Steven Thomas Williams'; // stw

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(elem => elem[0])
      .join('');
  });
};

createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display Balance
  calcPrintBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

let currentAccount, timer;
//
const startLogOutTimer = function () {
  let time = 300;
  const tick = function () {
    // Set time to 5 minutes

    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    // Decrease 1 sec
    time--;
  };
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
// Event handler
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount && currentAccount.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear inputs
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
  }
});

// 159 Implementing Transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

// 161 some and every
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);

      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
    // Add loan date
    inputLoanAmount.value = '';
  }
});

// 160 The findIndex Method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    +inputClosePin.value === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = '';
    labelWelcome.textContent = 'Log in to get started';
  }
});

// 163
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// 176
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//
//
// 170 Converting and Checking Numbers
// console.log(23 === 23.0);
// console.log(0.1 + 0.2);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// // Trues to get rid of unnecessary symbols
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('px30', 10));

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// // IsNaN if value if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'r20'));

// // isFinite - better way of checking if value is a number!!!
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
//
//
// 171 Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// // max or min do conversion but not a parsign
// console.log(Math.max(5, 7, 90, 23, 56));
// console.log(Math.max(5, 7, '90', 23, 56));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6 + 1));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(1, 6));

// // Rounding integers
// console.log(Math.trunc(234.56));
// console.log('---------round---------');
// console.log(Math.round(23.9));
// console.log(Math.round(23.3));
// console.log('---------ceil---------');
// console.log(Math.ceil(23.9));
// console.log(Math.ceil(23.3));
// console.log('---------floor---------');
// console.log(Math.floor(23.9));

// //
// // toFixed give us a string!
// console.log(+(23.9).toFixed(4));
//
//
// // 172 The Remainder Operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1(remainder)

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2(remainder)

// console.log(6 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));

// // Some fun
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });
//
//
// // 173 Numeric Separators
// // Solar system diameter
// // 287, 460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// console.log(transferFee1);
// console.log(transferFee2);
// // This doesn't work
// console.log(Number('230_000'));
// //
// //
// // 174 Working with BigInt
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(23432473242370473248234723847378478n);
// console.log(BigInt(23432473242370));
// //
// //
// // 175 Creating Dates
// // Create a date
// // const now = new Date();
// // console.log(now);

// // console.log(new Date('December 24,2015'));
// // console.log(new Date(account1.movementsDates[0]));

// // console.log(new Date(2037, 10, 19, 15, 25, 5));

// // // Unix date
// // console.log(new Date(0));
// // console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // Methods
// const future = new Date(2037, 10, 19, 15, 25);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.toISOString());

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);
// //
// //
// // 176 Operations With Dates
// const future = new Date(2037, 10, 19, 15, 25);
// console.log(Number(future));

// const calcDaysPast = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
// const days1 = calcDaysPast(new Date(2037, 3, 4), new Date(2037, 3, 24));

// console.log(days1);
// //
// //
// //
// // 179 Internationalizing Numbers (Intl)
// const num = 3884764.23;
// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
// };

// console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
// //
// //
// // 180 Timers: setTimeout and setInterval
// // setTimeout
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza ${ing1}, ${ing2}`),
//   2000,
//   ...ingredients
// );
// console.log('Waiting...');
// if (ingredients.includes('spinach')) {
//   clearTimeout(pizzaTimer);
// }
// // setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 3000);
