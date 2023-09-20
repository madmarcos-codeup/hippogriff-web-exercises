// explain the Math object
// (library of reusable functions that do math things)

// Math.PI constant
console.log(Math.PI);

// show Math.random()
console.log(Math.random());

// show Math.random() to get number from 0 to 9
console.log(Math.random() * 10);

// add 1 to change it to number from 1 to 10
console.log(Math.random() * 10 + 1);

// lastly, add floor to "truncate"
// actually, see if truncate is a function
console.log(Math.trunc(Math.random() * 10 + 1));


// Math.round()
// 3141.59
console.log(Math.round(3141.59));

// show how to use for rounding floats to arbitrary precision
// EXPLAIN THE PROCESS
// how to round 3141.59 to 3141.6
let num = 3141.59 * 10; // 31415.9
num = Math.round(num); // 31416
num = num / 10; // 3141.6
console.log(num);


// Math.floor()
// show + and - number floors
console.log(Math.floor(-3.14159));

// Math.ceil()

// Math.pow()
// show ES6 shorthand
console.log(Math.pow(2, 3));
console.log(2 ** 3);

// Math.sqrt()
console.log(Math.sqrt(-1));

// write a cool function to round float to a given precision
// e.g., roundFloat(3.14159, 3) -> 3.142

// round num to the given decimal precision
function roundToDecimal(num, decimal) {
    const offset = 10 ** decimal;
    num *= offset;
    num = Math.round(num);
    num /= offset;
    return num;
}

// round PI to tenths
console.log(roundToDecimal(Math.PI, 1));
// round PI to hundredths
console.log(roundToDecimal(Math.PI, 2));
// round PI to thousandths
console.log(roundToDecimal(Math.PI, 3));
// round PI to ones
console.log(roundToDecimal(Math.PI, 0));
