

// API endpoint 
const url = 'https://jsonplaceholder.typicode.com/posts';


// Sintaxis
// fetch(url, [options])  ->  fetch retorna promesas


// GET Request 
fetch(url)

    // examinando Response object
    // .then( res => console.log(res))
    .then( res => {
        console.log(res.headers.get('Content-Type'));
        for( const [key,val] of res.headers){
            console.log(key, val);
        }
        return res.json();
    })
    .then( res => console.log(res))
    .catch( error => console.error(error));


// POST Request
const payload = {
    id: 32,
    name: 'Juan Andrés',
    color: 'red'
}

const options = {
    method: 'POST',
    headers: {
        // Enviamos JSON en el cuerpo
        'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
}


// Request en sí
fetch( url, options)
    .then(res => console.log(res))
    .catch(error => console.error(error))