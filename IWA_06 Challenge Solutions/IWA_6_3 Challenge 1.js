const primaryPhone = '0748105141'
const secondaryPhone = 'o219131568'

// Only change below this line

// console.log(Number(primaryPhone))
// console.log(parseInt(primaryPhone))

const primaryValid = Number(primaryPhone) ===  parseInt(primaryPhone);
const secondaryValid = Number(secondaryPhone)  === parseInt(secondaryPhone);

// change log:
// removed type of as NaN is still considered a number and will always return a number
// converted the global const to a number with Number()
// strict equated them
// parseInt() our global const to coerce them to a number


console.log('Primary phone is a valid numerical string:', primaryValid)
console.log('Secondary phone is a valid numerical string:', secondaryValid )

// why does this work?
// basically the code is converting our global const's to a number which is technically what the required input should be.
// however with the user error ocurring on primaryPhone we see it is NaN.
// this is a problem as NaN is still considered a number in JS.
// this means we would need to convert the parseInt answer of NaN to string in the original code.
// that would mean we have code that looks like this:

    // global scope
    // let primaryCheck = '';
    // let secondaryCheck = '';

    // console.log(parseInt(primaryPhone))
    // console.log(parseInt(secondaryPhone))
    // // check to see the values

    // if (parseInt(primaryPhone) === NaN) {
    //     primaryCheck = "NaN";
    // } else {
    //     primaryCheck = 0;
    // }
    // check to see if it is === NaN
// this is the problem because if we check to see if a value is NaN it will never be NaN because NaN !== NaN 
// because many things can not be a number but those things aren't always the same thing
// example 
// let a = parseInt(a); let b = parseInt(b);
// this would both give us the value of NaN
// but the variable a != b they are just not the Type Number
// in theory if we could declare it as  if (parseInt(primaryPhone) === undefined) it would work 
    // but js doesn't understand that we are checking to see its type not the declared variable by the name of undefined.


    // if (parseInt(secondaryPhone) == NaN) {
    //     secondaryCheck = "NaN";
    // } else {
    //     secondaryCheck = 0;
    // }

    // console.log(primaryCheck)
    // console.log(secondaryCheck)

    // const primaryValid = typeof primaryCheck ===  "number"
    // const secondaryValid = typeof secondaryCheck ===  "number"

// so instead what we are trying to do is first change the global scope variables to a number either with Number() or parseInt()
// then we want to see if the number we have created is strictly equal to the number that the user gave.
// so parseInt/Number can give us 2 values: either the number or NaN
// but as explained above NaN != NaN. so our check would basically ask:
// if the Number() value is equal to the number given then true
// if the Number() value is NaN then it wont equal the value given even if we compare it to the number given converted to a number