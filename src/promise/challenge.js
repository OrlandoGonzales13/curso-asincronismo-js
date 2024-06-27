import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`) // Llama a la función fetchData con la URL de productos como argumento
    .then(response => response.json()) // Convierte la respuesta a formato JSON
    .then(products => { // Ejecuta esta función cuando la respuesta se convierte en JSON, pasando los productos como argumento
        console.log(products) // Imprime los productos en la consola
        return fetchData(`${API}/products/${products[0].id}`) // Retorna una llamada a fetchData con la URL del primer producto como argumento
    })
    .then(response => response.json()) // Convierte la respuesta del primer producto a formato JSON
    .then(product => { // Ejecuta esta función cuando la respuesta del primer producto se convierte en JSON, pasando el producto como argumento
        console.log(product.title); // Imprime el título del producto en la consola
        return fetchData(`${API}/categories/${product.category.id}`) // Retorna una llamada a fetchData con la URL de la categoría del producto como argumento
    })
    .then(response => response.json()) // Convierte la respuesta de la categoría a formato JSON
    .then(category => { // Ejecuta esta función cuando la respuesta de la categoría se convierte en JSON, pasando la categoría como argumento
        console.log(category.name); // Imprime el nombre de la categoría en la consola
    })
    .catch(err => console.log(err)) // Captura cualquier error que ocurra durante las promesas anteriores y lo imprime en la consola
    .finally(() => console.log('Finally')); // Ejecuta esta función después de que todas las promesas anteriores se completen o fallen, imprimiendo 'Finally' en la consolapcional para mostrar que se terminó la solicitud