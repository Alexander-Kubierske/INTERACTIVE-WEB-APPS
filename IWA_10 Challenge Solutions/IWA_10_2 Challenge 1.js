const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

// section 1
// here we need to call futureId to see if it has any information stored in the object if it does we report the name if it doesn't we respond with the string
if (holidays[9] === undefined) {
    console.log('ID {futureId} not created yet')
} else {
    console.log(holidays[9].name)
}

const copied = holidays.christmas;
// here we need to make our copy equal to the object christmas as specified by brief
copied = { 
    id: holidays[6].id,
// here we check the id of holiday as thats the id we are replacing potentially
    name: 'X-mas Day',
// we assign christmas object the value name X-mas as specified in brief
    date: new Date(`25 December ${currentYear} 13:25`),
// we take the date given and don't call the value as we would then change the original object value
}

const correctDate = copied.date;
// here we create a new var and equate it to copied date
correctDate.setHours(0),
correctDate.setMinutes(0)
// here we set the time to midnight for correctDate
// debug
// console.log(copied.date, holidays[6].date),
const isEarlier = copied.date < holidays[6].date;
console.log('New date is earlier:', isEarlier)

if (!isEarlier) {copied.date = holidays[6].date}
// here we see if isEarlier is false if so we equate our copied.date to the original programmed date.

const copiedFormatDay = copied.date.getDate();
const copiedFormatMonth = (copied.date.getMonth() + 1);
const copiedFormatDate = (copiedFormatDay.toString()).padStart(2 ,`0`) + `/` + (copiedFormatMonth.toString()).padStart(2 ,`0`) + `/` + currentYear;
// here we format the date to follow the DD/MM/YYYY format by retrieving the day converting to string and padding with an extra 0 if needed
// the same is done for the month however we + 1 as js starts the month count from 0 and not 1
console.log('ID change:', holidays[(christmas)].id === copied.id? `false` : copied.id);
console.log('Name change:', holidays[(christmas)].name === copied.name? `false` : copied.name);
console.log('Date change:', holidays[(christmas)].date === copied.date? `false` : copiedFormatDate);
// in these we check if the holidays[6] values are equal to the copied values if so we declare that nothing was changed if not we print the change

// section 3
holidays[0].date = new Date(`16 December ${currentYear}`);
// for the code to function we need to make sure that the first date in holidays is actually a date
// the original was missing the new Date() syntax

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstHolidayDate = new Date(firstHolidayTimestamp);
// here we convert the time from epoch to a standard date

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
// added () after .getTime for syntax 

const lastHolidayDate = new Date(lastHolidayTimestamp);
// here we convert the time from epoch to a standard date

const firstDay = firstHolidayDate.getDate();
const firstMonth = (firstHolidayDate.getMonth() + 1);
const lastDay = lastHolidayDate.getDate();
const lastMonth = (lastHolidayDate.getMonth() + 1);

console.log((firstDay.toString()).padStart(2 ,`0`) + `/` + (firstMonth.toString()).padStart(2 ,`0`) + `/` + currentYear);
console.log((lastDay.toString()).padStart(2 ,`0`) + `/` + (lastMonth.toString()).padStart(2 ,`0`) + `/` + currentYear);
// see line 91

const randomHoliday = holidays[((Math.random() * (8-0) + 0).toFixed())].date;
// here we create the correct syntax for a range between 0-8 and then call on the holidays[number].date
const randomDate = randomHoliday.getDate();
const randomMonth = (randomHoliday.getMonth() + 1);
console.log((randomDate.toString()).padStart(2 ,`0`) + `/` + (randomMonth.toString()).padStart(2 ,`0`) + `/` + currentYear);

// note our code will have a problem if the section 1 code (lines 56-63) is implemented as we would need to extend our array