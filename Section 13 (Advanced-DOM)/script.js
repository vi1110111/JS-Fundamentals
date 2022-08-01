'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

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
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got IT</button>';

// //header.append(message);
// header.before(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
///////////////////////////////////////////////// 187
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

///////////////////////////////////////////////// 188 Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const section1 = document.querySelector('#section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////// 191 Event Delegation (Page-navigation)
// More simple way
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     //console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determinate what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    //console.log('LINK');
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////// 194 Tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const cliked = e.target.closest('.operations__tab');
  // console.log(cliked);
  // Guard class, if there is no elements will immidiately finish
  if (!cliked) return;

  // Activate
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  cliked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  console.log(cliked.dataset.tab);
  document
    .querySelector(`.operations__content--${cliked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////// 195 Passing   arguments to event handlers (Fade out effect on links)
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////////////// 196 Implementing Sticky Nav (The scroll event)
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

///////////////////////////////////////////////// 197 Sticky nav: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   // null means - vieport
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeigth = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeigth}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////////// 198 Revealing Elements on Scroll
const AllSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

AllSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

///////////////////////////////////////////////// 199 Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  entry.target.classList.remove('lazy-img');

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
  rootMargin: '+200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////////// 200 Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRigth = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // Move Rigth
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // Move Left
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Move Rigth
  btnRigth.addEventListener('click', nextSlide);
  // Move Left
  btnLeft.addEventListener('click', prevSlide);

  // Arrow key
  document.addEventListener('keydown', function (e) {
    //console.log(e);
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  // Dots
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
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

// //
// //
// // 191 Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation !!!
//   //e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   false
// );

// //
// //
// // 193 DOM Traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); // only for direct children
// // First and last child
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// //h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // How to get all siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

// //
// //
// // 202 Lifecycle DOM Events
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML', e);
// });
