let productsSection = document.getElementById("productsSection");
let mainImg = document.getElementById("mainImg");


const apiUrl = 'https://products-api-2ttf.onrender.com/api/products';

// Make a GET request to the API using fetch()
fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })