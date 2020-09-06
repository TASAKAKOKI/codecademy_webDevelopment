// Information to reach API
const url = 'https://api.datamuse.com/words?';

//'rel_rhy=' is the start of a parameter for the query string. 
//This parameter will narrow your search to words that rhyme
//e.g. /words?rel_rhy=forgetful ==> words that rhyme with forgetful.
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  // const endpoint = url +  queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    };
  };

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


/* using renderRawResponse helperFunction.

// Information to reach API
const url = 'https://api.datamuse.com/words?';

//'rel_rhy=' is the start of a parameter for the query string. 
//This parameter will narrow your search to words that rhyme
//e.g. /words?rel_rhy=forgetful ==> words that rhyme with forgetful.
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  // const endpoint = url +  queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
    };
  };

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
*/