// //
// //
// // 272 Exporting and Importing in ES6 Modules
{
  // // Importing module
  // import './shoppingCart.js';
  // console.log('Importing module');
  // // Named import, variable should have the same name as in module
  // import { addToCart } from './shoppingCart.js';
  // addToCart('bread', 5);
  // // Multiple Named export
  // import { totalPrice as price, totalQuantity as tq } from './shoppingCart.js';
  // console.log(price, tq);
  // // Importing all exports from module
  // import * as shoppingCart from './shoppingCart.js';
  // // Will create object that will contain all exports from module
  // shoppingCart.addToCart('bread', 5);
  // console.log(shoppingCart.totalPrice);
  // // This will import default exports from module
  // import add, { cart } from './shoppingCart.js';
  // add('pizza', 2);
  // add('bread', 5);
  // add('apples', 4);
  // // Import are NOT a copy of exports, it's like a live connection
  // console.log(cart);
}
// //
// //
// // 273 Top-Level await (ES2022) ONLY IN MODULES
// // this awaint outside async function bloking module
{
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await res.json();
  // console.log(data);
  // console.log('Something');
  // const getLastPost = async function () {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await res.json();
  //   console.log(data);
  //   return { title: data.at(-1).title, text: data.at(-1).body };
  // };
  // // const lastPost = getLastPost();
  // // console.log(lastPost);
  // // // NOT Very clean
  // // lastPost.then(last => console.log(last));
  // const lastPost2 = await getLastPost();
  // console.log(lastPost2);
}
// //
// //
// // 274 The Module Pattern
{
  // const shoppingCart2 = (function () {
  //   const cart = [];
  //   const shippingCost = 10;
  //   const totaPrice = 237;
  //   const totalQuantity = 23;
  //   const addToCart = function (product, quantity) {
  //     cart.push({ product, quantity });
  //     console.log(
  //       `${product} ${quantity} added to cart (shipping cost ${shippingCost})`
  //     );
  //   };
  //   const orderStock = function (product, quantity) {
  //     cart.push({ product, quantity });
  //     console.log(`${product} ${quantity} ordered from supplier`);
  //   };
  //   return {
  //     addToCart,
  //     cart,
  //     totaPrice,
  //     totalQuantity,
  //   };
  // })();
  // shoppingCart2.addToCart('apple', 4);
  // shoppingCart2.addToCart('pizza', 2);
  // console.log(shoppingCart2);
}

//
//
// 275 CommonJS Modules // WORK IN NODE.JS
{
  // export.addToCart = function (product, quantity) {
  //   cart.push({ product, quantity });
  //   console.log(
  //     `${product} ${quantity} added to cart (shipping cost ${shippingCost})`
  //   );
  // };
}

//
//
// 277
