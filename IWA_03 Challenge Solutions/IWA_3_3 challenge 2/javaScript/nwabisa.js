// nwabisa.js

const firstName = "Nwabisa"
const surname = "Gabe"
export const role = "CEO"
// changed the const firstname to camel case.
// made sure to export the const role so that it could be received by scripts.js

const display= firstName + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display