// explain what a date object is behind the scenes

// make a no arg Date object and print it
let myDate = new Date();
console.log(myDate);

// make a date object for a specific date and print it
const months = ["Jan", "Feb", "Mar", "Apr"];
myDate = new Date(2015, 2, 15);
console.log(myDate);
console.log(months[2]);

// make a date object for a specific date and time and print it
myDate = new Date(2013, 2, 15, 17, 30, 10);
console.log(myDate);

// formatting dates and useful date functions
// mm/dd/yyyy
// yyyy-mm-dd
let dateString = myDate.getDate();
console.log(dateString);
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());

// the timestamp
// get timestamp for a date object
const start = Date.now();

// do a bunch of work
// for (let i = 0; i < 10000; i++) {
//     console.log("hello");
// }
const end = Date.now();
console.log(`Diff in ms is ${end - start}`);

console.log(`Diff in myDAte and now is ${Date.now() - myDate.getTime()}`)

// get a timestamp for right now without using a date object


// time something (loop that outputs stuff to the console)
