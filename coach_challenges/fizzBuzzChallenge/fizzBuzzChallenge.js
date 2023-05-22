// Explain the program that outputs numbers from 1 to 100… with a catch:
// For multiples of 3, print Fizz instead of the number.
// For the multiples of 5, print Buzz.
// For numbers which are multiples of both 3 and 5, print FizzBuzz.

for (let i = 1;  i <= 100; i++) { 
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz')
    }else if (i % 3 === 0){ 
        console.log('Fizz')
    }else if (i % 5 === 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}


// +++++++++++++++++++++++++++++++++++++++++ if else +++++++++++++++++++++++++++++++++++++++++

// fizzbuzz
// if (i % 5 === 0 && i % 3 === 0) {
//     console.log('FizzBuzz')
// }else if (i % 3 === 0){ 
// }else if (i % 5 === 0){
// }else{console.log(i)}

// fizz
// if (i % 3 === 0) {
//     console.log('fizz')
// }else{
//     console.log(i)
// }

// buzz
// if (i % 5 === 0) {
//     console.log('buzz')
// }else{
//     console.log(i)
// }

// we have 4 outcomes (i, fizz, buzz, fizzbuzz) with three conditions (%3, %5, %3&5) so we want to run a loop that checks if they are either 
// if they are they print the appropriate word if they are both it prints fizz first then buzz
// otherwise it prints the number

// +++++++++++++++++++++++++++++++++++++++++ Switch +++++++++++++++++++++++++++++++++++++++++
// const numberCheck = {
//     fizz: i%3 === 0,
//     buzz: i%5 === 0,
//     fizzbuzz: i%3 === 0 && i%5 === 0,
// }
// switch(i) {
//     case (numberCheck.fizz):
//         console.log('fizz')
//       break;
//     case (numberCheck.buzz):
//         console.log('buzz')
//       break;
//     case (numberCheck.fizzbuzz):
//         console.log('fizzbuzz')
//       break;
//     default:
//         console.log(i)
//   }
// the problem with this is i will never be true it will always be a number :. switch(i) wont work

