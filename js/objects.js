"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
// const person = {};
// person.firstName = "Doc";
// person.lastName = "Rob";
const person = {
    firstName: "Doc",
    lastName: "Rob"
};
console.log(person.firstName);
console.log(person.lastName);

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
person.sayHello = function() {
    return `Hello from ${this.firstName} ${this.lastName}!`;
};
console.log(person.sayHello());

const sally = {
    firstName: "Sally",
    lastName: "Jones",
    sayHello: person.sayHello
}
console.log(sally.sayHello());

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

const shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];
function exercise3() {
    for (const shopper of shoppers) {
        printShopper(shopper);
    }
}

function printShopper(shopper) {
    let output = `Name: ${shopper.name}
      Amount:   $${shopper.amount.toFixed(2)}`;

    if(shopper.amount > 200) {
        let discount = shopper.amount * 0.12;
        discount = discount.toFixed(2);
        output += `        
      Discount: $${discount}`;

        let total = shopper.amount * 0.88;
        total = total.toFixed(2);
        output += `        
      Total:    $${total}`;
    }

    console.log(output);
}

exercise3();

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
let books = [
    {
        title: "Dune",
        author: {
            firstName: "Frank",
            lastName: "Herbert"
        }
    },
    {
        title: "Stoner",
        author: {
            firstName: "John",
            lastName: "Williams"
        }
    },
    {
        title: "Spare",
        author: {
            firstName: "Prince",
            lastName: "Harry"
        }
    },
];
console.log(books[0]);
console.log(books[1].title);
console.log(books[1].author);
console.log(books[2].author.firstName);

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
function printBooks(books) {
    // for each book in the array
    // for (let i = 0; i < books.length; i++) {
    //     const book = books[i];
    books.forEach(function(book, i) {
        showBookInfo(i + 1, book);
    });
//         console.log(`Book #${i}
//     Title: ${book.title}
//     Author: ${book.author.firstName} ${book.author.lastName}
// -------------------------------`);
//     }
    // print it out
}

// printBooks(books);

/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */

function createBook(title, firstName, lastName) {
    const book = {
        title,
        author: {
            firstName,
            lastName
        }
    }
    return book;
}
const newBook = createBook("Misery", "Stephen", "King");
books.push(newBook);
printBooks(books);

function showBookInfo(bookNumber, book) {
    console.log(`Book #${bookNumber}
    Title: ${book.title}
    Author: ${book.author.firstName} ${book.author.lastName}
-------------------------------`);
}