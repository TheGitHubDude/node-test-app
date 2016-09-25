'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let randNum = (min,max) => {
  return Math.random() * (max - min + 1) + min;
}


let min = 100;
let max = 102;


let num = randNum(min, max).toFixed(0);


console.log('I\'m thinking of a number from '+min+' to '+max+'\n');
rl.question('What is your guess: ', (answer) => {

  if(answer === num){
    console.log('WHAT THE HECK!!! YOU GUESSED THE NUMBER! THERE WAS A 0.001 CHANCE YOU COULD HAVE DONE THAT');
  }else{
    console.log('SORRY YOU SUCK!!!!!!');
  }
  console.log('You guesses %s, I was thinking of %s', answer, num);
  rl.close();
});
