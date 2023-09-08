// function declaration

// start with the `function` keyword
// follow with the name of the function
// think of what  information you need in order to make the program work: these are the parameters
// you name the parameters and put them in a comma separated list inside the parentheses
// open up a pair of curly braces
// inside the curly braces you put the code that will actually run
// this is called the code block
// finally you create a return statement

// FUNCTION DECLARATION

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel){
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }


// ARROW FUNCTION

// Doesn't use the `function` keyword
// Define a variable with a variable name
// that variable name is how you call the function
// you put the parameters inside parentheses
// then you have an 'arrow' (angle bracket and equals sign)
// then you have the return value

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// If I am just returning something in one line
// I don't need the `return` keyword
// It's understood that what comes after the arrow *is* the return

const addTwoNumbers = (num1, num2) => num1 + num2;

// If I have multiple lines of logic inside my arrow function, I need curly braces
// If I have curly braces, I have to have a `return` keyword to define the return value

//function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel){
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }

const timeIWouldSave = (currentSpeed, plannedSpeed, distanceToTravel) => {
    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
}

// FUNCTION EXPRESSION

// These have basically been replaced by arrow functions
// The value of this is that you have a variable name that is a reference to a function
// That is useful if you ever need to pass a function to another function, or return a function from a function

const add = function(num1, num2){
    return num1 + num2;
}