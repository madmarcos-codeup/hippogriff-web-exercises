import randomNum from "./number-utils.js";

"use strict";

/*
my handy dice rolling functions
 */
let randomNumber = 5;

export function rollD6(){
    const d6 = randomNum(1, 6);
    return d6;
}

export function rollD20(){
    return randomNum(1, 20);
}

