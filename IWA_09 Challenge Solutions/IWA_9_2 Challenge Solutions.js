const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100
// here we made tax refer to its stored value 913 with the correct [] syntax
// we then convert it to a number so it can be a part of an operation
const startingAfterTax = (salary * 1) - (salary * taxAsDecimal)
// here we separated the 2 operations first to ensure they are performed in the correct order
// next we worked out the tax amount by multiplying salary by taxAsDecimal
const type = size + `-` + lodging 
// corrected the order in which the names appear in const rent and added a - to match the values given
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type]
// added our salary to initial equation
// corrected bracket syntax with .
// used [] to call on the value that matched const type in the rent object
console.log(balance.toFixed(2))
// fixed the balance to match expected outcome

// debug
// console.log(rent[type])