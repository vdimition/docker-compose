'use strict';

let counter = 0;
const randomMs = (Math.floor(Math.random() * 5) + 5) * 1000;
const intervalId = setInterval(() => console.log(counter++), 1000);

setTimeout(() => {
  clearInterval(intervalId);
  throw new Error('We crashed!!!');
}, randomMs);
