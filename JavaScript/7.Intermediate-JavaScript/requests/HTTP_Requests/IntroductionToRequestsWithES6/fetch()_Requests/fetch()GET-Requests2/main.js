fetch('https://api-to-call.com/endpoint')
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => jsonResponse)


/*
line 1
    First, call the fetch() function and pass it this URL as a string:
        https://api-to-call.com/endpoint

    This first argument determines the endpoint of the request.
*/

/*
line 2
    Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument. The success callback function takes one parameter, response.

    .then() will fire only after the promise status of fetch() has been resolved.
*/

/*
line 3
    Inside of the response callback function, check the ok property of response inside of a conditional statement. In the code block of the conditional statement, return response.json().

    The reason we’re testing the ok property of the response object is that it will be a Boolean value. If there were no errors response.ok will be true and then your code will return response.json().
*/

/*
line 6
    Below the curly braces of the conditional statement, create a new error with this code:

        throw new Error('Request failed!');
    
        Your code will throw this error when response.ok is falsy.
*/

/*
line 7
    Add a second argument to .then(), it will be an arrow function that will handle our failures. Separate the first callback function from the second with a comma. The second callback function takes a single parameter, networkError.

    In the code block of the second callback function, log networkError.message to the console.

    If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.
*/

/*
line 8
    Chain another .then() method to the end of the first .then() method.

    Pass the new .then() method a callback function that takes jsonResponse as its parameter and return jsonResponse.

    The second .then()‘s success callback won’t run until the previous .then() method has finished running. It will also not run if there was an error was thrown previously.
*/