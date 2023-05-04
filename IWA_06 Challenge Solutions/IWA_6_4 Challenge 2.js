
const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let taxAsDecimal = ""
let startingAfterTax = ""
let balance = ""

if ((hourOfDay !== null) || (minuteOfDay !== null) && (hourOfDay === 00) && (minuteOfDay == 00)) {
	// formatted if () {}
	// separated each parameter and made sure they have a check
	taxAsDecimal = parseInt(tax) / 100
	// changed string to number '100'
  	startingAfterTax = salary - salary * taxAsDecimal
	balance = startingAfterTax - transport - food - rent
	// spelling error corrected to balance from balace
	// referenced startingAfterTax and not Starting
}
	
console.log('R', balance.toFixed(2))
// changed toFixed(2) as is required

// debug:
	// let taxAsDecimal = parseInt(tax) / 100
	// console.log (taxAsDecimal)
	// let startingAfterTax = salary - salary * taxAsDecimal
	// console.log (startingAfterTax)
	// let balance = startingAfterTax - transport - food - rent
	// console.log (balance)
	// console.log('R', parseInt(balance).toFixed(2))
	// console.log((hourOfDay !== null))
	// console.log(minuteOfDay !== null)