const myPromise = function() {
    return new Promise((res,rej) => {
        res('I am reswolved now!');
    });
};
// async version
async function asyncFuncExample(){
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
  }
  
asyncFuncExample(); // Prints: I am resolved now!
/*https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/await-operator
 explained as below:
    Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.
*/
// but I think just using promise as below also work.
// e.g) when using promise.then().then()
// first .then() is waiting for promise to be resolved/
// when promise is resolved, first then() will be executed.
// and when first .then() return new promised valude
// second .then() receive it and executed.
// below is the simple code that work just as above async syntax without creating any new function.


// promise  version
myPromise()
.then((res) => console.log(res))

// it seems that using promise.then way is much easier to read and more simple
// don't know why using complicate async syntax and make it complex.
// is there anything I missed? 
// is there any benefit for using async instead of normal promise?


// also when we see provided app.js from  here(https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/await-operator)
// it seems no big difference btw using existing promise syntax,
// for me, it seems just making another variable and make code complex.. 
// please anyone help me with this.
// thank you! 

const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
};
nativePromiseDinner();

// async/await version:
async function announceDinner() {
  // Write your code below:
  const meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();

