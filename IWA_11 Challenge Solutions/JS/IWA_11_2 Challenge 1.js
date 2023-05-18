// script.js

// Section 1 declaring variables
// can we turn orders into objects?
// need to define that we are query selecting
// need to rename the variables for js to read em

const order1 = document.querySelector('[data-key="order1"]');
// this drills to our order1 node
const root1 = {
    biscuits: order1.getAttribute(['data-biscuits']),
    donuts: order1.getAttribute(['data-donuts']),
    pancakes: order1.getAttribute(['data-pancakes']),
    status: order1.getAttribute(['data-delivered'])
}
// this gets the values of our order1 attributes

const order2 = document.querySelector('[data-key="order2"]');
const root2 = {
    biscuits: order2.getAttribute(['data-biscuits']),
    donuts: order2.getAttribute(['data-donuts']),
    pancakes: order2.getAttribute(['data-pancakes']),
    status: order2.getAttribute(['data-delivered'])
}

const order3 = document.querySelector('[data-key="order3"]');
const root3 = {
    biscuits: order3.getAttribute(['data-biscuits']),
    donuts: order3.getAttribute(['data-donuts']),
    pancakes: order3.getAttribute(['data-pancakes']),
    status: order3.getAttribute(['data-delivered'])
}

// Here we coerce our data-delivered value into a Boolean.
// we then check to see if it is delivered and output delivered or pending

const status1 = root1.status === "true"? `Delivered` : `Pending`;
const status2 = root2.status === "true"? `Delivered` : `Pending`;
const status3 = root3.status === "true"? `Delivered` : `Pending`;


// here we handle our loader
// first we drill to the corresponding loading... elements
// then replace the inner text with the data- attributes in each dl section
const loader1 = {
    biscuits: order1.querySelector('.biscuits .count').innerText = root1.biscuits,
    donuts: order1.querySelector('.donuts .count').innerText = root1.donuts,
    pancakes: order1.querySelector('.pancakes .count').innerText = root1.pancakes,
    status: order1.querySelector('.status dd').innerText = status1,
}

const loader2 = {
    biscuits: order2.querySelector('.biscuits .count').innerText = root2.biscuits,
    donuts: order2.querySelector('.donuts .count').innerText = root2.donuts,
    pancakes: order2.querySelector('.pancakes .count').innerText = root2.pancakes,
    status: order2.querySelector('.status dd').innerText = status2,
}

const loader3 = {
    biscuits: order3.querySelector('.biscuits .count').innerText = root3.biscuits,
    donuts: order3.querySelector('.donuts .count').innerText = root3.donuts,
    pancakes: order3.querySelector('.pancakes .count').innerText = root3.pancakes,
    status: order3.querySelector('.status dd').innerText = status3,
}