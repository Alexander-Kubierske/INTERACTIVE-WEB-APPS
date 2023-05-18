// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// this handles our checker to see what state the book is in
// it calls the span (class status) and returns the text inside
// we then call the relevant property from STATUS_MAP
const book1Checker = document.querySelector('#book1 .status');
const book1Status = STATUS_MAP[book1Checker.textContent];

const book2Checker = document.querySelector('#book2 .status');
const book2Status = STATUS_MAP[book2Checker.textContent];


const book3Checker = document.querySelector('#book3 .status');
const book3Status = STATUS_MAP[book3Checker.textContent];

// here we create an object that has properties retrieving each element (buttons in this case)
// in theory these could all be nested in classHandler with sub objects for each book
    // its not necessary due to how little complexity we are displaying currently
const classHandler1 = {
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin'),
}

const classHandler2 = {
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin'),
}

const classHandler3 = {
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin'),
}


// here we set the colour of checkin to the default css and as we have no css it is default white
classHandler1.checkin.style.color = ``,
// this is where the colour indicating availability is changed
// it does this by calling the status span and modifying its style.colour with that of the STATUS_MAP
book1Checker.style.color = book1Status.color,
// here the buttons are called and disabled or enabled by .disable checked against STATUS_MAP given booleans
// we invert the booleans to match expected behaviour due to us checking to disable and not checking to enable
classHandler1.reserve.disabled = !book1Status.canReserver,
classHandler1.checkout.disabled = !book1Status.canCheckout,
classHandler1.checkin.disabled = !book1Status.canCheckIn

classHandler2.checkin.style.color = ``,
book2Checker.style.color = book2Status.color,
classHandler2.reserve.disabled = !book2Status.canReserver,
classHandler2.checkout.disabled = !book2Status.canCheckout,
classHandler2.checkin.disabled = !book2Status.canCheckIn

classHandler3.checkin.style.color = ``,
book3Checker.style.color = book3Status.color,
classHandler3.reserve.disabled = !book3Status.canReserver,
classHandler3.checkout.disabled = !book3Status.canCheckout,
classHandler3.checkin.disabled = !book3Status.canCheckIn
