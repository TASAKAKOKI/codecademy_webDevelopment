// Information to reach API
const url = 'https://api.datamuse.com/words?';

//'rel_jjb=' is the start of a parameter for the query string. 
//In this exercise, we will create a request to set a topic and find adjectives that describe the input word using query strings.
// e.g. /words?rel_jjb=ocean  ==>  adjectives that are often used to describe ocean
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
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