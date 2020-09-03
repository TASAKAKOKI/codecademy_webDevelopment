/*
Accessing the Process Object
In computer science, a process
    is the instance of a computer program that is being executed.
You can open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information about the various processes running on your computer right now.
Node has a global process object with useful methods and information about the current process.

The process.env property
    is an object which stores and controls information about the environment in which the process is currently running.
    For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located.
    It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users.
    We could store this information on the process.env.
        One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}

The process.memoryUsage()
    returns information on the CPU demands of the current process. It returns a property that looks similar to this:
        {rss: 26247168,
        heapTotal: 5767168,
        heapUsed: 3573032,
        external: 8772 }
    Heap can mean different things in different contexts:
        a heap can refer to a specific data structure, but it can also refer to the a block of computer memory.
    process.memoryUsage().heapUsed
        will return a number representing how many bytes of memory the current process is using.

The process.argv property
    holds an array of command line values provided when the current process was initiated.
    The first element in the array
        is the absolute path to Node, which ran the process.
    The second element in the array
        is the path to the file that’s running.
    The following elements
        will be any command line arguments provided when the process was initiated.
    Command line arguments are separated from one another with spaces.

node myProgram.js testing several features

console.log(process.argv[3]); // Prints 'several'


We’ve only covered a few of the properties of the process object, so make sure to check out the "documentation on the process object('https://nodejs.org/api/process.html')" to learn more about it and explore some of its other methods and properties.

*/



/*
We want the program in app.js to store the starting amount of memory used (heapUsed), perform an operation, and then compare the final amount of memory used to the original amount. Right now, the initialMemory variable is assigned to null. Change this line, so that initialMemory is instead assigned the value of the heapUsed property on the object returned from invoking the process.memoryUsage() method.
*/
let initialMemory = process.memoryUsage().heapUsed;

/*
We want the user of the program to be able to fill in their own word when they run the program. Right now word is assigned to null. Change the program so that when a user initiates the program with an additional command line argument, word will be assigned that value. For example, running the program with the command: node app.js Codecademy would result in word being assigned the value 'Codecademy'
*/
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

/*
at the bash environment
*/

/*
Awesome! Now let’s run the program. Type node app.js followed by any word you like and then hit enter.
*/