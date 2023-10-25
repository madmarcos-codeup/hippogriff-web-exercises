import {getRandomGreeting} from "./greeting-logic.js";

function main() {
    document.querySelector("#greet-button").addEventListener("click", greetUser);

}

function greetUser() {
    // 1. grab user name
    const userName = document.querySelector("#greet-name").value;

    // 2. call greeting
    const greeting = getRandomGreeting() + " " + userName;

    // 3. output greet to greeting paragraph
    document.querySelector("#greeting").innerText = greeting;

}

main();