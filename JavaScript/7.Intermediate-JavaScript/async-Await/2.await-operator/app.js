const brainstormDinner = require('./library.js')

/*
In the provided code, we’ve required in the function brainstormDinner(). This function expects no arguments and returns a new promise with a resolved value of a string representing a meal. (You can look at the code for this function by navigating to the library.js file.)

Look at the nativePromiseDinner() function in app.js. Take a moment to understand this function and predict its expected outcome. In the next step, you’ll be recreating its functionality using async...await rather than native promises.

It’s not necessary to execute the nativePromiseDinner() function, but, if you’d like to, check out the hint for some guidance. Press “Check Work” when you’re ready to move on to the next step.
*/


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}
nativePromiseDinner();


// async/await version:
async function announceDinner() {
  // Write your code below:
  
  
}

