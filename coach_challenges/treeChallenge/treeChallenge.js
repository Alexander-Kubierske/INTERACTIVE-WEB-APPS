// in order to complete this Challenge we need to print a tree in console

// tree example:
// *
// **
// ***
// ****

var tree = "" 
// here we define tree as an empty string
// it is a string because it needs to get concatenated with the asterisk character later
// it is empty as we want the top of the tree to have only one asterisk.
// if it wasn't empty the top of the tree would have "**"

const button = document.querySelector('[data-key="button"]')
// this creates a variable named submit
    
const myFunction = () => {
    // this defines the function that should be performed onClick

    var iterations = parseInt(document.getElementById("iterationAmount").value);
    // this retrieves the user input to tell us how many lines and thus times this should iterate
    
    for (let i = 1;  i++i <= iterations; i++) { 
        // here we run a loop. first we define i which runs before the code in "{}",
        // next we say how many times the loop should run
        // finally we increment the code in the loop
        tree += '*' .repeat(i) + "\n"
        // here we tell the code to concatenate the variable "tree" with the string '*'
        // we also tell it to repeat i amount of times with a line break after each repetition of the concatenation 
        console.log (tree)
        // here we print the variable tree
    }

    document.getElementById ("printedTree").innerHTML = tree;
}

button.addEventListener ('click', myFunction) 
    // this listens to see if the button was clicked



// my original assignment without any help would print in consol and looked like this:

// var tree = "*"

// for (let i = 0; i <=4 ; i++) {
//     tree += '*'
//     console.log (tree)
// }

// after some research i found that by having var tree = "*" our tree would print 2 on top instead of one
// this model also had 0 integration with html and had to process the tree in the javascript with no way for a user to interface easily

