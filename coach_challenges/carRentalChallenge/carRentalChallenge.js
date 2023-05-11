// Every day you rent the car costs $40. 
// If you rent the car for 7 or more days, you get $50 off your total. 
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

let days = 7;
let charge = 40;

// initial operation
charge = charge * days

if (days >= 3 && days < 7) {
    charge = charge - 20
    console.log(`For`, days, `days the price will be $`, charge);
} else if (days >= 7 ) {
    charge = charge - 50
    console.log(`For`, days, `days the price will be $`, charge);
} else {
    console.log(`For`, days, `days the price will be $`,charge);
}

// Switch didn't work because you cannot have a boolean in a case
// in addition this code checked to see if days === true || false which it would never equal as days isn't a boolean
// const a = days < 3;
// const b = days >= 3 && days < 7;
// switch (days) {
//     case a: 
//         console.log(`For `, days, `the price will be $`, charge);
//     case b: 
//         charge - 20
//         console.log(`For `, days, `the price will be $`, charge);
//     default:  
//         charge - 50
//         console.log(`For `, days, `the price will be $`, charge)
// }   
// debug
// console.log(days, `\n`, charge, `\n`, a, `\n`, b)