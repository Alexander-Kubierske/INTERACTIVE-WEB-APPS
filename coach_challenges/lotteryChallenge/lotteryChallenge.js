// generate 5 different numbers range 1-45
// user inputs 1 number limited between 1-45

// match 1 no. to the five generated numbers
// and print if found to console

// represents the 5 numbers chosen for this lottery
const chosen = []

/**a
 * Here we prompt the user to choose their lotto number
 */
// const userInputNumber = prompt(`Please input a number between 1 & 45`);
// debug
const userInputNumber = 30;

if ((!isNaN(userInputNumber)) && (userInputNumber > 0) && (userInputNumber <= 45)) {

    while (chosen.length < 5){
        // this generates a number between 1 and however long the array field is
        const randomNumberGenerator = (Math.random(1 , 45) * (45 -1) + 1).toFixed(0);
            // debug
            // console.log(`RNG`, randomNumberGenerator)
        // here we add the random number to the array chosen 
        if (!chosen.includes(randomNumberGenerator)){
            chosen.push(randomNumberGenerator)
        }
        
    } 

    // here we see if the user chosen number matches any numbers chosen by the program
    if (chosen.includes(userInputNumber)) {
        console.log(`Congratulations you won!`)
    }else{
        console.log(`Unfortunately your number was not chosen.`)
    }
        // debug
        console.log(chosen)
} else {
    console.log(`Please insure you have input a number between 1 & 45`)
}







