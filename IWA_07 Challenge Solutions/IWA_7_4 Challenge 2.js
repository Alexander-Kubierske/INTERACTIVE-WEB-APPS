const nickname= "Timmy";
const firstName = "Timothy";

console.log(`Good Morning`, !nickname.valueOf() ? firstName : nickname, `!`)

// the code initially did not separate each element or object and had it all grouped under a "" 
// this would explain why the text as written was logged.
// so instead we separated them.
// next we added a if else statement to check for the variables
// if nickname is not present we try to log firstName
// if firstName isn't present we will log nothing

// my only concern is that the consol still shows that there is something missing giving us 2 blank spaces which we don't want.
// this also doesn't use the functions as given instead reverting to a completely new solution.
// unsure if the initial code had hints for a different answer?

