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
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
///////////////////////////////////////////////// 187
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

message.style.backgroundColor = '#37383d';
message.style.width = '100';

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
