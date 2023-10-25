"use strict";

import randomNumber from "./number-utils.js";

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

export function getRandomGreeting() {
    // pick a random greeting element from the greetings array
    const randomIndex = randomNumber(0, greetings.length - 1);
    return greetings[randomIndex];
}