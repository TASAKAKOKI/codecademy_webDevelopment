//XMLHttpRequest GET

    // create new object
    const xhr = new XMLHttpRequest();
    
    const url = 'http://api-to-call.com/endpoint';

    //handles response
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            //code to execute with response
        }
    };

    // opens request and sends object
    xhr.open('GET', url);
    xhr.send();