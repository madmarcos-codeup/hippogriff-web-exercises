"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const noLanguageUsers = users.filter(function(user) {
    if(user.languages.length >= 3) {
        return true;
    }
    return false;
});
console.log(noLanguageUsers);

// 3. Use .map to create an array of strings where each element is a user's email address
const emails = users.map(function(user) {
    // return {
    //     id: user.id,
    //     email: user.email
    // };
    return user.email;
});
console.log(emails);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const average = users.reduce(function(avgSoFar, user) {
    return avgSoFar + (user.yearsOfExperience / users.length);
}, 0);
console.log(average);
// console.log(totalYears / users.length);

// 5. Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce(function(longestSoFar, user) {
    if(user.email.length > longestSoFar.length) {
        return user.email;
    }
    return longestSoFar;

}, users[0].email);
console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const names = users.reduce(function(namesSoFar, user) {
    if(namesSoFar.length > 0) {
        // if not the first iteration then prepend a ,
        namesSoFar += ", ";
    }
    return namesSoFar + user.name;
}, "");
console.log("Your instructors are: " + names);

const names2 = users.map(function(user) {
    return user.name;
});
console.log(names2.join(", "));

const languageSet = users.reduce(function(setSoFar, user) {
    for (let i = 0; i < user.languages.length; i++) {
        setSoFar.add(user.languages[i])
    }
    return setSoFar;
}, new Set());
console.log(languageSet);

let arr = [];
languageSet.forEach(function(setMember) {
    arr.push(setMember);
});
console.log(arr);

// Set example in JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// should only be 5 unique fruits in the below array
// const fruits = ["apple", "pear", "pear", "banana", "peach", "apple", "banana", "plum", "apple"];
// const fruitSet = new Set();
// // iterate over the loop
// for (let i = 0; i < fruits.length; i++) {
//     // add each array element to the set
//     // the set will automatically discard duplicates
//     fruitSet.add(fruits[i]);
// }
// console.log(fruitSet);