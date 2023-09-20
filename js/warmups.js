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
