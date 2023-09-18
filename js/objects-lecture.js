"use strict";

let name = "Ragnar";
let age = 10;
let gender = "male";

let spot = {}; //new Object();
spot.name = "Spot";
spot.age = age;
spot.gender = gender;

console.log(spot);

let fluffy = {
    name: "Fluffy",
    age: 6,
    gender: "female"
};
fluffy.age = 7;
fluffy.allergies = ["grass"];
fluffy.allergies.push("oak");
console.log(fluffy);

// spot.allergies = [];
// spot.allergies.push("cedar");
spot.allergies = ["cedar"];

// object property variable assignment example
// let oldDog = {
//     name,
//     age,
//     gender,
//     "lots more stuff": "stuff"
// }
// oldDog.moreStuff = "more stuff";
// oldDog["lots more stuff"] = "lots more stuff";
// console.log(oldDog);

let dogs = [];
dogs.push(spot);
dogs.push(fluffy);

console.log(dogs);

let newDog = {
    name: "Bilbo",
    age: 36,
    gender: "male"
};
dogs.push(newDog);

newDog = {
    name: "Frodo",
    age: 18,
    gender: "female"
};
dogs.push(newDog);
console.log(dogs);

newDog = makeDog("Pickles", 8, "female");
dogs.push(newDog);
console.log(dogs);

function makeDog(name, age, gender) {
    const dog = {
        name,
        age,
        gender,
        bark: bark
    }
    return dog;
}

prettyPrintDogs(dogs);

function prettyPrintDogs(dogs) {
    console.log("Here are the dogs:");
    for (const dog of dogs) {
        // pretty print a single dog
        prettyPrintDog(dog);
    }
}

function prettyPrintDog({name, age, gender}) {
    console.log(`${name}
    Age: ${age}
    Gender: ${gender}
-----------------------------`);
}

// spot.bark = function() {
//     console.log(this.name + " barks");
// };
spot.bark = function() {
    console.log(this.name + " barks");
};

spot.bark();

spot.sniff = function(sniffTarget) {
    console.log("Spot sniffs the " + sniffTarget);
};
spot.sniff("tree");

fluffy.bark = spot.bark;
fluffy.bark();

function bark() {
    console.log(this.name + " barks");
}

dogs[dogs.length - 1].bark();