"use strict";

const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
let planetsArray;

/**
 * TODO:
 * Convert planetsString to an array, and save it in a variable named
 * planetsArray.
 * console.log planetsArray to check your work
 */

// planetsArray = planetsString.split("|");

// let's practice writing functions
function stringToArray(aString) {
    return aString.split("|");
}
planetsArray = stringToArray(planetsString);
console.log(planetsArray);

/**
 * TODO:
 * Create a string with <br> tags between each planet. console.log() your
 * results. Why might this be useful?
 */
function makeHTMLStringFromArray(anArray) {
    // return anArray.join("<br>");
    let htmlString = "";

    for (let i = 0; i < anArray.length; i++) {
        if(i > 0) {
            htmlString += "<br>";
        }
        htmlString += anArray[i];
    }
    return htmlString;
}

console.log(makeHTMLStringFromArray(planetsArray));

/**
 * BONUS:
 * Create another string that would display your planets in an unordered
 * list. You will need an opening AND closing <ul> tags around the entire
 * string, and <li> tags around each planet.
 */

// <ul><li>Mercury</li><li>Venus</li><li>Earth</li>...</ul>

function makeUnorderedListFromArray(anArray) {
    // let htmlString = "<ul>";
    //
    // // concatenate an LI for each planet
    // anArray.forEach(function(element) {
    //     htmlString += `<li>${element}</li>`;
    // });
    //
    // htmlString += "</ul>";
    // return htmlString;

    return "<ul><li>" + anArray.join("</li><li>") + "</li></ul>";
}

console.log(makeUnorderedListFromArray(planetsArray));