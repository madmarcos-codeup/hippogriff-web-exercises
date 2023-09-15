//include the same function from the for loops exercise to make things easier
//later, we'll learn an easier way to do this without having to cut and paste the function
function isEven(num){
    return num % 2 === 0;
}


//create a variable to hold int for number entered
let userNum;
//do while loop while(true)
do{
    //prompt user for input and parse it in to an int
    userNum = parseInt(prompt(`Please enter an odd number between 1 and 49`));

//if a number is even, alert the user and continue
    if(isEven(userNum)){
        alert(`${userNum} is even. Please enter an odd number`)
        continue;
    }

    //if a number is less than 1 or greater than 49, alert the user and continue
    if(userNum < 1 || userNum > 49){
        alert(`${userNum} is out of bounds. Please enter a number between 1 and 49`)
        continue;
    }

    //if a number is not finite, alert the user and continue
    if(!isFinite(userNum)){
        alert(`${userNum} is not a number. Please enter a valid number`)
        continue;
    }

    //if none of those are true, break
    break;

}while(true);



//Use a loop and the continue statement to output all the odd numbers between 1 and 49, except for the number the user entered.

//log userNumber
console.log(`Number to skip is ${userNum}`);

//for loop to iterate 1-50
for (let i = 1; i < 50; i++) {
    //continue if even
    if(isEven(i)){
        continue;
    }
    //if i is userNumber, log a message and continue
    if(i === userNum){
        console.log(`A wild ${userNum} has appeared! RUN!`)
        continue;
    }
    //log i `Here is an odd number: `
    console.log(`Here is an odd number: ${i}`)
}