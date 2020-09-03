/*
Great! Now our Dog and Cat classes are being exported, but we still need to require them into app.js for our function to work properly.
At the top of the app.js file, create a variable Dog and assign as its value invoking the require() function with the relative path of the dog.js file.
Next, create a Cat variable and assign as its value invoking the require() function with the relative path of the cat.js file.
*/
const Dog = require('./dog');
const Cat = require('./cat');

/*
Let’s see this program in action! Use the node command to run app.js from the terminal.
*/