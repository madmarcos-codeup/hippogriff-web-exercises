"use strict";

let myNumber = 7;

/*==== ALERT ======= */

// alert("Hello, I am an alert!");

/*==== CONFIRM ====== */

// let userChoice = confirm("Wait! Don't leave yet! Can I chat with you!");
//
// if (userChoice === true){
//     console.log("yay!")
// } else {
//     console.log("boooo");
// }

/*==== PROMPT ====== */

// let currentSpeed = prompt("How fast are you driving?");
// let plannedSpeed = prompt("How fast do you want to drive?");
// let distanceLeft = prompt("How many miles do you have left?");
//
// let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
//
// let timeAtPlannedSpeed = (distanceLeft/plannedSpeed) * 60;
//
// let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

// Output with template literals
// console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved} minutes.`);

// Output with concatenation
// console.log("At your current speed you will take " + timeAtCurrentSpeed + " minutes. At your planned speed you will take " + timeAtPlannedSpeed + " minutes. You will save " + timeSaved + " minutes.")

/*=======  EXERCISE SOLUTIONS ============= */

// Number 3

// let classIsFull = confirm("Is the class full?");
// let scheduleConflicts = confirm("Does the class conflict with your schedule?");
//
// let studentCanEnroll = !classIsFull && !scheduleConflicts;
//
// alert(`It is ${studentCanEnroll} that you can enroll in this class.`);

// Number 4

let personBoughtMoreThanTwoItems = confirm("Did the person buy more than two items?");
let offerHasExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the person a premium member?");

let productOfferCanBeApplied = (personBoughtMoreThanTwoItems || premiumMember) && !offerHasExpired;

alert(`It is ${productOfferCanBeApplied} that we can apply the offer.`);



















