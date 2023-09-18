let cars = ["altima", "bronco", "pinto", "mustang"];
console.log(cars);

// add gremlin to cars
cars.push("gremlin");
console.log(cars);

cars.unshift("civic");
console.log(cars);

// remove first and last elements
let removedCar = cars.shift();
console.log("removed " + removedCar);
console.log(cars);

removedCar = cars.pop();
console.log("removed " + removedCar);
console.log(cars);

let index = cars.indexOf("bronco");
console.log(index);

index = cars.indexOf("bRonco");
console.log(index);

cars.push("bronco");
console.log(cars);

// find the first bronco
index = cars.indexOf("bronco");
console.log(index);
// find the second bronco
index = cars.indexOf("bronco", 2);
console.log(index);

// lastIndexOf
index = cars.lastIndexOf("bronco", 3);
console.log(cars[index]);

let doesExist = cars.includes("bronco");
console.log(`bronco exists? ${doesExist}`);

doesExist = cars.includes("bRonco");
console.log(`bRonco exists? ${doesExist}`);

// making subsets with slice
let someCars = cars.slice(2);
console.log(someCars);

someCars = cars.slice(2, cars.length - 2);
console.log(someCars);

cars.reverse();
console.log(cars);
cars.reverse();
console.log(cars);

cars.sort();
console.log(cars);

let myNums = [1, 2, 3, 4, 5, 10, 11, 12];
console.log("unsorted numbers");
console.log(myNums);

console.log("lexicographically sorted numbers");
myNums.sort();
console.log(myNums);

console.log("numerically sorted numbers");
myNums.sort(myNumberSort);
console.log(myNums);

function myNumberSort (a, b) {
    // this comparison function should return:
    // positive # if a is > b
    // negative # if a is < b
    // 0 if a == b

    // return a - b; // this works or you can use the longer version below
    if(a > b) {
        return 1; // return something positive
    } else if(a < b) {
        return -1; // return something negative
    } else {
        return 0; // they are the same value
    }
}

let fruitString = "apple, orange, banana";
let fruits = fruitString.split(", ");
console.log(fruits);

// fruitString = fruits.join("-+-");
// console.log(fruitString);

// print out fruitString with colons instead of commas
// can do this in one line but it is confusing
// console.log(fruitString.split(", ").join(":"));

// breaking it out into separate smaller steps is easier to read
let fruitArray = fruitString.split(", ");
fruitString = fruitArray.join(":");
console.log(fruitString);