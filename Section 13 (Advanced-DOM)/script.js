'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////// 186
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got IT</button>';

const header = document.querySelector('.header');
//header.append(message);
header.before(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
///////////////////////////////////////////////// 187
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

message.style.backgroundColor = '#37383d';
message.style.width = '100%';

///////////////////////////////////////////////// 188 Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const section1 = document.querySelector('#section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////// 191 Event Propagation in Practice

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////Lectures

// // 186 Selecting, Creating, and Deleting Elements
// // SELECTING
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // Basic
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// // More advanced
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button')); // returns HTML collection
// console.log(document.getElementsByClassName('btn')); // Also live HTML collection

// // CREATINg / INSERTING
// // .insertAdjacentHTML()

// // DOM elements is uniqe
// //header.prepend(message);

// //header.append(message.cloneNode(true));

// // Inserting
// // header.before(message);
// // header.after(message);
// // message.remove();

//
//
// // 187 Styles, Attributes and Classes
// // Styles
// // message.style.backgroundColor = '#37383d';
// // message.style.width = '100';
// // Whrong way to read style
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// // How to det Styles
// console.log(getComputedStyle(message).color);

// // How to change css properties
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// // Read Attribute
// console.log(logo.alt);

// // Set Attribute
// logo.alt = 'Beatiful';
// logo.setAttribute('company', 'Bankist');

// // Non-standart
// console.log(logo.designer);
// // Get Attribute
// console.log(logo.getAttribute('designer'));
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// // Data Attributes !!!  ---------------
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //
// //
// // 188 Implementing Smooth Scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   // Scroll
//   // OLD WAY SIMPLE ONE
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   // OLD WAY SMOOTH ONE
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   // MODERN WAY
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //
// //
// // 188 Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   console.log('addEventListener: You are reading the heading note!');
// };

// h1.addEventListener('mouseenter', alertH1);

// // Remove EventListener
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// // Exist also event property
// //h1.onmouseenter = alertH1;

//
//
// 191 Event Propagation in Practice
