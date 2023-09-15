"use strict";

let fruits = ['apple', "orange", "pear", "banana"];
console.log(fruits);

// let nums = [1, 2, 3];
// console.log(nums);
//
// let godKnowsWhat = ["stuff", 1, "more stuff"];
// console.log(godKnowsWhat);

// console.log(fruits.length);

// show me the first element
// console.log(fruits[0]);

// show me the last element
let lastIndex = fruits.length - 1;
// console.log(fruits[lastIndex]);

// print all fruits
// for (let i = 0; i < fruits.length; i++) {
//     if(fruits[i] === "orange") {
//         continue;
//     }
//     console.log("throws away " + fruits[i]);
// }

console.log(prettyArrayString(fruits));

console.log(prettyArrayString([1, 2, 3, 4, 5]));


function prettyArrayString(arr) {
    let arrString = "";

    for (let i = 0; i < arr.length; i++) {
        // concat a , on all but the first element
        if(i !== 0) {
            arrString += ', ';
        }
        arrString += arr[i];
    }

    return arrString;
}

// search through the fruit bowl for an orange
// fruits.forEach(isThisFruitAnOrange);

// function isThisFruitAnOrange(fruit) {
//     console.log("Found a(n) " + fruit);
//     if(fruit === "orange") {
//         console.log("Found it!!!");
//     }
// }

// for (let fruit of fruits) {
//     console.log("Found a(n) " + fruit);
//     fruit = "durian";
//     if(fruit === "orange") {
//         console.log("Found it!!!");
//         break;
//     }
// }

console.log(fruits);
let bobsFruits = ["peach", "plum", "durian"];
let ourFruits = [...fruits, bobsFruits[2], "jackfruit"];

console.log(ourFruits);

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5));
let numArray = [5, 3, 1, 2, 3, 4, 5];
console.log(subtract(...numArray));

function sum(...nums) {
    let sumOfNums = 0;
    for (const num of nums) {
        sumOfNums += num;
    }
    return sumOfNums;
}

// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum([1, 2, 3, 4, 5, 6]));
// console.log(sum([1, 2, 3]));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(...[10, 20, 30]));