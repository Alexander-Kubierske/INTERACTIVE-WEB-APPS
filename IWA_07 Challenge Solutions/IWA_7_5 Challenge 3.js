const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = `R` + ((parseFloat(leoBalance) + parseFloat(sarahBalance)) * -1).toFixed(2);
// parse only works on numbers so the "R" stops parseInt or float
// we then needed to parse both no. vars so that they can be put into an operation as numbers
// we use float as the numbers provided will not convert to integers
// we then turn them to positive numbers by timesing them by -1
// finally we fix them to a decimal number
const leo = leoName.trim() + ` ` + leoSurname.trim() +` (Owed: R` + ((leoBalance) * -1).toFixed(2) + `)`;
const sarah = sarahName.trim() + ` ` + sarahSurname.trim() +` (Owed: R` + ((sarahBalance) * -1).toFixed(2) + `)`;
// first we remove the "" as we are working with variables not a string
// next we make sure to trim any excess spaces
//  we then separate name from surname with a blank string
// then we create a string for the Owed and R
// finally we tidy up the balance number and by using to fixed we turn the string value to a number allowing the operation to perform
//  we end with the required closing bracket string
const total = "  Total amount owed:";
// here we add 2 spaces in front as \t will give us too many spaces and it will look nicer here than in the next declared var ->
    // for formatting sake it might be better to have it in the const result as we decided to do it there for the case of owed
const result = leo + `\n` + sarah + `\n` + `\n` + divider + `\n` + total + owed + `  ` + `\n` + divider;
// here we put line breaks after each variable with an extra after our 2 names
// we also add the final 2 spaces after total + owed which could have been done earlier when we declared the owed var.

console.log(result)
// brief asks us to magically have an extra R1000? also if we round we will always have .21?

// Debug
// console.log(owed)
// console.log(leo)
// console.log(sarah)
// console.log(total)

