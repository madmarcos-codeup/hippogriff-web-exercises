"use strict";

// let i = 1; // initialization
// while(i < 10) { // test
//     console.log(i);
//     ++i; // update
// }

// let i = 10;

// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

// do {
//     console.log('do while loop iteration #' + i);
//     i++;
// } while (i < 10);

// let answer = 7;
// let guess = 0;
// while(guess !== answer) {
//     guess = parseInt(prompt("Enter a number from 1 to 10"));
//     if(guess !== answer) {
//         console.log("Wrong loser!");
//     }
// }
// console.log("You guessed it!");

// for(let i = 0; i < 10; i++) {
//     if(i > 5) {
//         // break;
//         console.log("skipping rest of loop iteration");
//         continue;
//     }
//     console.log("for loop: " + i);
// }

// for (let i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) { // if i is odd
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

// revised guessing game (I like this version better)
// let answer = 7;
// // loop until the user guesses the number
// while(true) {
//     // get a guess from the user
//     let guess = getGuessFromUser();
//
//     // stop the loop if the user guesses the answer
//     if(guess === answer) {
//         console.log("You guessed it!");
//         break;
//     }
//
//     // you guessed wrong
//     console.log("Wrong!");
// }
//
// function getGuessFromUser() {
//     let guess = prompt("Enter a number from 1 to 10");
//     guess = parseInt(guess);
//     if(guess < 1 || guess > 10) {
//         console.log("Please enter a number from 1 to 10!!!");
//         guess = 0;
//     }
//     return guess;
// }

myLoopingFunction(3);
myLoopingFunction(10);

function myLoopingFunction(maxIterations) {
    for (let i = 0; i < maxIterations; i++) {
        console.log("loop iteration i = " + i);
    }
}

console.log("done");