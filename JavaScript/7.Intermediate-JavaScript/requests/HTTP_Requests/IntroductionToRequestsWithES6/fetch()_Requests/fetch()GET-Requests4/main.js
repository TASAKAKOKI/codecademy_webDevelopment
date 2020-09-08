// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
    fetch(endpoint,{cache: 'no-cache'})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message))
        .then(jsonResponse => {
            // renderRawResponse(jsonResponse);
            renderResponse(jsonResponse);
        })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);


/*
line 21
    At the end of the .then() method, chain another .then() method.

    Pass .then() an anonymous arrow callback function that takes jsonResponse as its single parameter.
*/

/*
line 22
    Inside the callback function, call the function renderRawResponse() and pass in jsonResponse as an argument. Run the code.

    In the input field, you can type in a word and click the submit button.

    If all went well, you should see an array of words that the Datamuse API responded with!

    You can view the purpose of renderRawResponse at public/helperFunctions.js.
*/

/*
line 22
    Time to clean up that response a bit. Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse).

    Run your code.

    Try the webpage again with another word!
*/