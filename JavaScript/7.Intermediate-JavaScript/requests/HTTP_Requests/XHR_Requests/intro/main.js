/*
To get a glimpse of how the event loop works, take a look at the code in the code editor.

We’ll be using setTimeout(), which will pass a function call to the queue. The first argument is a callback and the second argument is the number of milliseconds the program must wait before the callback can be run.

The other console.log() calls are run from the stack.
*/
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

/*
Interesting right?

What if we change the 2500 in setTimeout() to be 0? Essentially the callback doesn’t need to wait before it can be called. Do you think that this change will affect the order?
*/
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');