// Information to reach API
const apiKey = '59d5a458bbc744e1a765a30e30b5bf74';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method:'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
  .then(response => {
    if(response.ok) {
      // renderJsonResponse(response);
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    // renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })
}