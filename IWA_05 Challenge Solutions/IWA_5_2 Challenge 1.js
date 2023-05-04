const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
    // changed to be a number not a string
        // formatted to be const and closed the statements 
        
let customers = 1;
    // changed to number and not string as this variable is used in equations
let location = 'RSA';
    // changed to let as customers should be able to select the country thus changing this variable
// let currency = null;
// deprecated as currency has been declared in the function at line 7 ++
    // moved to the beginning so that we can define all the necessary fields before performing functions

// ++ this handles the currency and shipping for RSA
if (location === 'RSA') { 
        shipping = 400; 
        currency = 'R'; 
} else {
    // can be replaced by running a if  bolean shipping = location === 'NAM' ? 600 : 800
    if (location === 'NAM'){
        shipping = 600;
        currency = '$';
    } else { 
        shipping = 800;
        currency = '$';
    }
}
    // turned RSA to string
    // changed the if lookup to strict equality instead of declare value ('=' to '===')
    // made sure that we declared values instead of checking equality in lines 7+8
    // ** added the calculation for excluding RSA as this makes later code easier to execute

// this handles shipping fee for NAM and then everywhere that isn't NAM or RSA + changes currency to $
// if (location !== 'RSA') {
//     if (location === 'NAM'){
//         shipping = 600;
//         currency = '$';
//     } else { 
//         shipping = 800;
//         currency = '$';
//     }
// }
    // deprecated see line 23 **
        

// this is where we declare the cart price and amount ordered
let shoes = 300 * 1;
let toys = 100 * 5;
    // declared toys instead of having it in an equation ('-' to '=')
let shirts = 150 * NONE_SELECTED;
    // NONE_SELECTED is a declared variable not a string
let batteries = 35 * 2;
    // made batteries have a value of 35 * 2 by adding (=)
let pens = 5 * NONE_SELECTED;
    // NONE_SELECTED is a declared variable not a string
        // made these all variables

let cartTotal = shoes + toys + shirts + batteries + pens;
    // created variable as shorthand for later 

//  shipping = null;
//  currency = '$';
//  currently has no function

// handles free shipping
if (cartTotal >= 1000 && customers === 1 && location === 'RSA' || location ==='NAM') {
    shipping = 0;
} else {
    if (cartTotal >= 1000 && customers !== 1 && location === 'RSA' || location ==='NAM') {
        console.log(FREE_WARNING)
    }
}
    // I wish the operands were declared simpler but we need to check that each condition is satisfied at each step


// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }
// deprecated as it is handled in line 46. Had it been handled here the customer would still get a shipping fee of 0 while receiving the warning.

if (location === 'NK') {
    // fixed location to check if it equates to 'NK'
    console.log(BANNED_WARNING)
} else { 
    console.log('Price', currency, cartTotal + shipping)
}
// capitalized price in console.log due to output requirement of "Price: R1270"

