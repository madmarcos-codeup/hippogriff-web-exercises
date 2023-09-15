"use strict";



// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// create a function showMultiplicationTable
function showMultiplicationTable(num){
    // create a for loop to iterate 1-10
    for (let i = 1; i <= 10; i++) {
        // log `number x index = number*i`
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
// call the function
//showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

//create a for loop 0 < 10
// for (let i = 0; i < 10; i++) {
//     //get an int 20-200
//     let number = getRandomInt(20,200);
//     //log the number and if its even
//     console.log(`The number is: ${number}`);
//     console.log(`Number is even: ${isEven(number)}`)
// }


//Create a for loop that uses console.log to create the output shown below.
//create a for loop 1<=9
for (let row = 1; row <= 9; row++) {
    //make a String to hold each line
    let str = `${row}`;

    //nest a loop to build the String j<i
    for (let j = 1; j < row; j++) {
        str += row;
    }
    //log String
    console.log(str);
}


//Create a for loop that uses console.log to create the output shown below.
//start at 100
//decrement by 5s i>=5;i-=5
// for (let i = 100; i >=5; i-=5) {
//     //log i
//     console.log(i)
// }
//














function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function isEven(num){
    return num % 2 === 0;
}





// // let i = 5;
// // let iString = "" + i;
// // console.log(iString.repeat(5));
//
// // let i = 1; // initialization
// // while(i < 10) { // test
// //     console.log(i);
// //     ++i; // update
// // }
//
// // let i = 10;
//
// // while (i < 10) {
// //     console.log('while loop iteration #' + i);
// //     i++;
// // }
//
// // do {
// //     console.log('do while loop iteration #' + i);
// //     i++;
// // } while (i < 10);
//
// // let answer = 7;
// // let guess = 0;
// // while(guess !== answer) {
// //     guess = parseInt(prompt("Enter a number from 1 to 10"));
// //     if(guess !== answer) {
// //         console.log("Wrong loser!");
// //     }
// // }
// // console.log("You guessed it!");
//
// // for(let i = 0; i < 10; i++) {
// //     if(i > 5) {
// //         // break;
// //         console.log("skipping rest of loop iteration");
// //         continue;
// //     }
// //     console.log("for loop: " + i);
// // }
//
// // for (let i = 1; i < 100; i++) {
// //
// //     if (i % 2 !== 0) { // if i is odd
// //         // number isn't even
// //         // odd numbers aren't as cool
// //         // skip the rest of the loop and continue with the next iteration
// //         continue;
// //     }
// //
// //     console.log('Here is a lovely even number: ' + i);
// // }
//
// // revised guessing game (I like this version better)
// // let answer = 7;
// // // loop until the user guesses the number
// // while(true) {
// //     // get a guess from the user
// //     let guess = getGuessFromUser();
// //
// //     // stop the loop if the user guesses the answer
// //     if(guess === answer) {
// //         console.log("You guessed it!");
// //         break;
// //     }
// //
// //     // you guessed wrong
// //     console.log("Wrong!");
// // }
// //
// // function getGuessFromUser() {
// //     let guess = prompt("Enter a number from 1 to 10");
// //     guess = parseInt(guess);
// //     if(guess < 1 || guess > 10) {
// //         console.log("Please enter a number from 1 to 10!!!");
// //         guess = 0;
// //     }
// //     return guess;
// // }
//
// // myLoopingFunction(3);
// // myLoopingFunction(10);
//
// // function myLoopingFunction(maxIterations) {
// //     for (let i = 0; i < maxIterations; i++) {
// //         console.log("loop iteration i = " + i);
// //     }
// // }
//
//
//
//
// console.log("done");