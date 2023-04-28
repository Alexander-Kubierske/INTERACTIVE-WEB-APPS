const DATE= 2050;
let STATUS= 'student';
// changed the (:) to (=)
// changed to (let) as the status can be both or either or 'student'/'parent' but will never change due to const declaration
let COUNT = 0;
// changed to let so that the variable can be changed later
let MONTH = ''
// ++ used new variable for month as date was in use and month is more accurate 
// changed all declarations to upper case outside of block level to show them as defined globally

if (DATE == 2050) {
	console.log("January", 'New Year’s Day')
    // added missing bracket at end.
	console.log("March", 'Human Rights Day')
	    MONTH = 'April'
	console.log(MONTH, 'Family Day')
	console.log(MONTH, 'Freedom Day')
    // changed variable to month (see ++)
        COUNT = COUNT + 4
        // **removed the let as we shouldn't redeclare the count value but instead change it

        if (STATUS == "student") {
            console.log('June', 'Youth Day')
                COUNT = COUNT + 1
                // (see **)
        }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
        MONTH = 'December'
	console.log(MONTH, 'Day of Reconciliation')
    // see ++
        COUNT = COUNT + 3
        // (see **)

        if (STATUS == "parent") {
            console.log(MONTH, 'Christmas Day')
                COUNT = COUNT + 1
                // (see **)
        }

	console.log(MONTH, 'Day of Goodwill')
    // see ++
        COUNT = COUNT + 1
        // (see **)
}

console.log('Your status is:', STATUS)
console.log('The year is:', DATE)
console.log('The total holidays is:', COUNT)