
// let flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

//=== IF - ELSE IF - ELSE ====?


// if (flavor === "chocolate"){
//     alert("One chocolate ice cream coming right up!");
// } else if (flavor === "vanilla"){
//     alert("One vanilla ice cream coming right up!")
// } else {
//     alert("Sorry, we don't have that flavor.");
// }

// === CAPTURING SEVERAL POSSIBILITIES IN ONE IF STATEMENT
// === BY USING A LOGICAL OPERATOR IN THE CONDITIONAL STATEMENT

// if (flavor === "chocolate" || flavor === "vanilla"){
//     alert(`One ${flavor} ice cream coming right up!`);
// } else {
//     alert("Sorry, we don't have that flavor.");
// }


// === SWITCH STATEMENT: CLEAN AND READABLE

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry!");
//         break;
// }

// === CODE GOLF: TERNARY OPERATOR

const userDecision = confirm("Please don't leave? Don't you want a free flashlight?");

const goodDecision = "Great! Give me your credit card information and shipping address and your mother's maiden name.";

const badDecision = "Too late. I have your IP address. Give me all your info or else.";

// if (userDecision){
//     alert(goodDecision);
// } else {
//     alert(badDecision);
// }


  // is userDecision true?
 // if so, alert goodDecision
 // otherwise, alert badDecision
alert(userDecision?goodDecision:badDecision);
