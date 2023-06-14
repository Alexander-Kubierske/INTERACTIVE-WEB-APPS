// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

/**
 * This function creates an array called result with length empty indices
 * it is called by createData function 
 * @param {Number} length 
 * @returns {result []}
 */
const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i = i + 1) {
        //this was an infinite loop with let i not equal to anything and no incrementing 
        result.push('')
    }
    
    return result
} 

/**
 * This function 
 * @returns 
 */
const createData = () => {
    //missing an = sign
    const current = new Date(); 
    //here we redeclare current instead of passing it through presumably as we want to edit it within the function scope
    current.setDate(1); //this sets the day to 1 so we can use it to calculate the month from the starting day

    const startDayMonth = current.getDay(); 
    // this gets the day of the week that the month starts on 
    const daysInMonth = getDaysInMonth(current); /**this is where we pass the current date to the function up top */

    const weeks = createArray(5);
    // this creates a variable (weeks) with an empty array of 5 items (we could make this dynamic)
    const daysArray = createArray(7);
    // this creates a variable (days) with an empty array of 7 items
    const result = [];
    


    /**
     * Here we create a matrix with the amount of weeks on one axis and the days on the other
     * the array when printed looks like this:
     * week: weekIndex +1 (ie 1-5)
     * days:[7 items with either a number according to the week or a blank item]
     */
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) { 
        // changed to a for loop so we could control the weekIndex instead of just its read value
        result.push({
            week: weekIndex + 1,
            days:[]
        })

        /**
         * this is where we create the days axis check the date in each item according to which week it is in
         */
        for (let daysArrayIndex = 0; daysArrayIndex < daysArray.length; daysArrayIndex++) {
            // debug 
            // console.log('days:', Number(daysArrayIndex), 'startDayMonth:', startDayMonth, 'weekIndex:', weekIndex)
            const numberOfDays = Number(daysArrayIndex) - startDayMonth + (weekIndex * 7) + 1; 
            // this logic was flawed as it needed to calculate the date by looping with 7 days in a week according to the day of the week the month started on
            // this works by taking the daysArrayIndex number and - the day of the week that the month started on (0-6) + (the week the weekIndex loop is in times 7)
            // which gets us how many dates have come before the current week and adds one as we need the startDayMonth to be a number between 1-7
            const isValid = numberOfDays > 0 && numberOfDays <= daysInMonth; 
            // this takes the days number and sees if it is a number that falls between 1 and the number of days in this month.
            // this will basically make sure that it is a day in the given month and not one of a previous/next month
            // debug
            // console.log(numberOfDays)
            
            // here we add the actual date to the days array created at the beginning of the weekIndex for loop
            result[weekIndex].days.push({
                // the problem we face here is that the weekIndex isn't a number explicit therefore the reference would fail to find
                dayOfWeek: daysArrayIndex + 1, // +1 makes it so that we have the days start with monday instead of sunday
                value: isValid ? numberOfDays : '', //this will print the date no. or a blank space depending on isValid
            })
        }
    }

    return result
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const { week, days} of data) {//
        let inner = "";
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)//
    
         for (const { dayOfWeek , value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 7 ;
            const isAlternate = week % 2 === 0;

						let classString = 'table__cell'

            if (isToday) classString = `${'table__cell_today'} table__cell_`
            if (isWeekend) classString = `${'table__cell_weekend'} table__cell_`
            if (isAlternate) classString = `${'table__cell_alternate'} table__cell_`
            inner = addCell(inner, classString, value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}` //this should auto make the title June 2023

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)