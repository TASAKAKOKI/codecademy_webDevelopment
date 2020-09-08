const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
//JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

//.onreadystatechange will contain the event handler that will be called when xhr‘s state changes.
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    // The response property will contain the data that we’re getting back from the POST request.
    return xhr.response;
  }
};

//.open() creates a new request and the arguments passed in determine what type of request is being made and where it’s being made to.
xhr.open('POST', url);

//.send() will send the request to the server.
xhr.send(data);