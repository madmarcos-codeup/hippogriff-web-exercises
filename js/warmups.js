//Description:
//
// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."
//
// These dots at the end also add to the string length.
//
// For example, trim("Creating kata is fun", 14) should return "Creating ka..."
//
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
//
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
//
// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
//
// e.g. trim("He", 1) should return "H...", because 1 <= 3
//
// Requested maximum length will be greater than 0. Input string will not be empty.


function trim(str, num){
    if (str.length < num) {
        return str;
    } else if (num <= 3){
        return `${str.substring(0, num)}...`;
    } else {
        return `${str.substring(0, num-3)}...`;
    }
}

// big change
// another big change

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

function addressToObject(address){
    const streetNumber = address.split(' ', 1).toString();
    const indexOfFirstSpace = address.indexOf(' ');
    const streetName = address.substring(indexOfFirstSpace + 1);
    return {
        streetNumber : streetNumber,
        streetName: streetName
    }
}

/* Write a function that accepts an array of numeric values and returns the average of those values.  */

function averageOfArrayNums(arrayOfNums){
    const numNums = arrayOfNums.length;
    let sum = 0;
    for (let i = 0; i < arrayOfNums.length; i++){
        sum += arrayOfNums[i];
    }
    return sum / numNums;
}

const arrayOfNums1 = [4, 10, 8, 6, 9];

const arrayOfNums2 = [800, 1669, 1034, 1304, 893, 1430, 1741, 927, 1401, 1800, 925, 1588, 455, 280, 995, 1536, 1195, 406, 142, 152, 355, 616, 1317, 1242, 345, 1307, 151, 235, 657, 193, 1154, 1282, 1130, 1390, 1062, 1333, 699, 1239, 170, 182, 1231, 1141, 1625, 1955, 1508, 1260, 734, 635, 8, 1712 ];

const arrayOfNums3 = [ 11, 15, 13, 12, 9, 5, 16, 7, 4, 20 ];

/**
 * Is the Average of All Elements a Whole Number?
 * Create a function named isAvgWhole that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
 *
 * Examples
 *
 * >> isAvgWhole([1, 3]) ➞ true
 * >> isAvgWhole([1, 2, 3, 4]) ➞ false
 * >> isAvgWhole([1, 5, 6]) ➞ true
 * >> isAvgWhole([1, 1, 1]) ➞ true
 * >> isAvgWhole([9, 2, 2, 5]) ➞ false
 */

function isAvgWhole(arrayOfNums){
    return averageOfArrayNums(arrayOfNums) % 1 === 0;
}

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

function totalPets(array){
    let numPets = 0;

    //=== with a forEach loop
    // array.forEach(person => numPets += person.pets);

    //=== with a for loop
    // for (let i = 0; i < array.length; i++){
    //   numPets +=  array[i].pets;
    // }

    //=== with a for ... of loop
    for (const person of array){
        numPets += person.pets;
    }
    return numPets;
}

console.log(totalPets([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2},
    {name: 'Steve Pflug', pets: 3},
    {name: 'DocRob', pets: 1}
]));





