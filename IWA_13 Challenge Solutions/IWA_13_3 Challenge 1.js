let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

// in all three functions we corrected the syntax to be const var '=' () => instead of const '=' var () =>

const logCalc = () => { 
    const isString = typeof(calculated) === "number"
    // typeof needs to have an operand in ()
    // line 10 cannot redeclare typeof(calculated) and should instead be a boolean
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    // parseNumber isn't an operator
// this section converts whatever value is in calculated to a number and declares calculatedAsNumber === the number in calculated or throws an error if no number is provided

    calculated = calculatedAsNumber + 1
    // we need to redeclare calculated and not check it
    // here we check how many times the user has logged in and add 1 as they are performing the action increasing the login no.
}

const calcUser = () => {
    logCalc()
    // to call a function we need ()
    if (calculated > 2) user = 'John'
    if (calculated > 2) state = 'requesting'
    if (calculated > 3) state = 'idle'
    // I don't know why we would need this kind of parameter in our if statement (IE what we are checking for) so I don't know how to improve the logic but the logic is wrong
    // basically this won't give us great accuracy if calculated (line 3) /== '1'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
        // debug
        // console.log(`User: ${user} (${calculated}) ${state}`)
	}
    // debug
    // else{
    //     console.log(state, user, calculated)
    // }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

