"use strict";

// .forEach review =========================

const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function(price, index){
//     console.log(`Item number ${index + 1}: $${price}`);
// });

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

// const outputDiv = document.querySelector("#output");

const wrapper = document.querySelector("#all-content");

// smashers.forEach((smasher, index) => {
//    const smashP = document.createElement("p");
//    smashP.innerText = `Character number ${index + 1}: ${smasher}`;
//    outputDiv.appendChild(smashP);
// });

//====== .map()

const pricesDoubled = prices.map(price => price * 2);
// const pricesDoubled = prices.map(function(price){
//     return price * 2;
// });
// console.log(pricesDoubled);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);
// console.log(mileages);
// console.log(Math.min(...cars.map(car=>car.mileage)));

const lowMileages = cars.filter(car => car.mileage < 10000);

console.log(lowMileages);

const outputDiv = document.querySelector("#output");

lowMileages.forEach(car => {
   const carPar = document.createElement("p");
   carPar.innerText = `
    I found a ${car.make} ${car.model} with ${car.mileage} miles.
   `;
   outputDiv.appendChild(carPar);
});

cars.filter(car => car.mileage < 10000)
    .map(car => {
    const kilometers = car.mileage * 1.609;
    return {...car, kilometers}
} ).forEach(({make, model, mileage, kilometers}) => {
    const p = document.createElement("p");
    p.innerText = `
    I found a ${make} ${model} with ${mileage} miles, or ${kilometers} kilometers.
   `;
    outputDiv.appendChild(p);
})

console.log(cars);

// ******************** REDUCE

// define reduce

// explain when to use it
// aggregate function examples: sum, average, max, min, count

// find the sum of prices
function calcPriceSum(sumSoFar, currentPrice) {
    console.log(sumSoFar + ", " + currentPrice);
    return sumSoFar + currentPrice;
}

const totalPrice = prices.reduce(calcPriceSum, 0);
console.log(totalPrice);
console.log("avg price " + totalPrice /  prices.length);

// find the max price
function findMaxPrice(maxSoFar, currentPrice) {
    // what does this return???
    if(currentPrice > maxSoFar) {
        return currentPrice;
    }
    // currentPrice is <= maxSoFar so KEEP the existing maxSoFar
    return maxSoFar;
}
const maxPrice = prices.reduce(findMaxPrice, prices[0]);
console.log(maxPrice);

// find the car with the lowest mileage
function findLowestMileage(lowestSoFar, currentCar) {
    if(currentCar.mileage < lowestSoFar.mileage) {
        return currentCar;
    }
    return lowestSoFar;
}
const lowestMileageCar = cars.reduce(findLowestMileage, cars[0]);
console.log(lowestMileageCar);

// find the cars with model that starts with C
console.log("FILTER EXAMPLE");
let filteredCars = cars.filter(function(car) {
    // console.log(car);
    if(car.model.charAt(0).toUpperCase() === "C") {
        // the car's model DOES start with C
        return true;
    }
    // the car's model does not start with C
    return false;
});
console.log(filteredCars);

filteredCars = cars.filter((car) => {
    // console.log(car);
    if(car.model.charAt(0).toUpperCase() === "C") {
        // the car's model DOES start with C
        return true;
    }
    // the car's model does not start with C
    return false;
});
console.log(filteredCars);