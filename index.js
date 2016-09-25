'use strict';

let num;
let min = 100;
let max = 200;
let tries = 0;
let maxTries = 5;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randNum = (min,max) => {
  return Math.random() * (max - min + 1) + min;
};

let getAnswer = () => {
  if(tries <= maxTries){
    tries++;
    rl.question('What is your guess: ', (answer) => {
      if(answer === num){
        rl.close();
        console.log('WHAT THE HECK!!! YOU GUESSED THE NUMBER🎉🎉🎉🎉🎉🎉!!! THERE WAS A 0.00000000000000000000000001 CHANCE YOU COULD HAVE DONE THAT');
        process.exit(0);
      }else{
        console.log('SORRY YOU SUCK😐😐😐😐😐😐!!!!!!');
        getAnswer();
      }
  });
  }else{
    console.log('fail: too many guesses');
    process.exit(1);
  }
};

num = randNum(min, max).toFixed(0);
console.log('I\'m thinking of a number from '+min+' to '+max+'\n');
getAnswer();
