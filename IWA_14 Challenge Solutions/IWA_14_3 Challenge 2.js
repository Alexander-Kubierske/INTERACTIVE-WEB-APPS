// script.js
// line 3 & 5 used mixed syntax now changed to arrow function as it is a 1 line process and was recommended method for functions
const add = (a, b) =>  a + b 
// line 5 needed to multiply the added result by c and not minus b from a
const multiply = (added, c) => added * c 


function internal() {
    // declared our process as methods to have a final console.log instead of an untidy return this.
    // line 11 tried to create a call for add but did not use the syntax nor did it reference any value without mentioning the internal object
	const added = add.call(this, this.internal.a, this.internal.b)
    // line 13 passed the wrong parameters and didn't call a function.
	const result = multiply.call(this, added, this.internal.c)
	console.log(result)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
    // not quite sure why these are here.
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate() // 48 (c(a+b)) (8(2+4))
example2.calculate() // 12 (c(a+b)) (3(2+2))