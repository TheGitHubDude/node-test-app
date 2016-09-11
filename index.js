'use strict'

let randNum = (min,max) => {
  return Math.random() * (max - min + 1) + min;
}


let min = 100;
let max = 1000;
let ans;

let num = randNum(min, max).toFixed(0);

console.log('I\'m thinking of a number it is: '+num);
