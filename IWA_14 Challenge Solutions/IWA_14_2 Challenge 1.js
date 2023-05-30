firstName = 'John';
age = 35;
hobby = 'Coding';

// initial problems: 
// hobby is both a variable and a function which means when we call hobby() it is not seen as a function due to its var declaration on top.
// we need to decide what to call to logTwice
// the logTwice function needs a parameter to pass to the console.log

const logTwice = (caller) => {
  console.log(caller)
  console.log(caller)
//   no .log
}

function caller () {
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
//   name changed to firstName
}

caller()


// in the given setup we call the function hobby as it will take logTwice console logging it 
// therefore we need to figure out how to set the string as a param for logTwice from within the hobby function
// as well as rename the function to avoid conflict 

// caller() runs function caller which sets the parameter of logTwice to (string) 
// but logTwice as a function then needs to run thus console.logging whatever the caller set the param to
