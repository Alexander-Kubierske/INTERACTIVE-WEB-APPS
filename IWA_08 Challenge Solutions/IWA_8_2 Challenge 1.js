const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
// needed to declare the variable with =
	name: leoName,
	// + leoSurname, not declared/ doesn't exist
	balance: Number(leoBalance).toFixed(2),
	// tidied the number up
	// it may be better to name this outstandingBalance and convert the number to a positive
	// outstandingBalance: Number(leoBalance).toFixed(2) * - 1,
	accessID: `47afb389-8014-4d0b-aff3-e40203d2107f`,
	// turned to string
	age: 24,
	address: {
	// fixed syntax to have :
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal,
		// these were being redeclared instead of equated
	}
}

const sarah = {
	name: sarahName.trim() + ` ` + sarahSurname,
	// trimmed sarahName of excess spaces added a space between name an surname corrected spelling by adding h
	balance: Number(sarahBalance).toFixed(2),
	accessID: `6b279ae5-5657-4240-80e9-23f6b635f7a8`,
	age: 62,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal
	}
	// reorganized the objects to match the format from leo
}

console.log(leo, `\n`, leo.address)
// added line break for readability
// when logged address has an error.
console.log(sarah, `\n`, sarah.address)
