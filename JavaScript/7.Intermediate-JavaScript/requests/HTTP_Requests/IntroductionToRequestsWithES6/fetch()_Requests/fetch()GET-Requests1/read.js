// fetch GET

fetch('http://api-to-call.com/endpoint').then(response => {//sends request

    //converts response object to JSON
    if(response.ok) {
        return response.json();
    }    

    //handle errors
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message))

//handle success
.then(jsonResponse => {
    //Code to execute with jsonResponse
});