// 272 Exporting and Importing in ES6 Modules
// Exporting module
console.log('Exporting module');

// // Blocking Code
// console.log('Start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching Users');

// This variables are scoped to this module
const shippingCost = 10;
export const cart = [];

// Named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

// Multiple Named export
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

// Default exports. Basically exporting a value itself no name needed
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
}
