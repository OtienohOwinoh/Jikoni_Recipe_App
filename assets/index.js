document.addEventListener('DOMContentLoaded', function(){


const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector ('.search-result');
const container = document.querySelector ('container');
let searchQuery = '';
const APP_ID = '3acb26b3';
const APP_key = '3b074862a1b0a5a50c91b34c1c53ba25';



searchForm.addEventListener ('submit', (e) =>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;

    fetchAPI();
});

async function fetchAPI () {
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;
    const response = await fetch(baseURL)
    const data = await response.json();
    generateHTML(data.hits)
    
    console.log (data);
}

function generateHTML(results){
    let generatedHTML = '';
    results.map(result=> {
        generatedHTML +=

        `   
        <div class="item">
    <img src="${result.recipe.image}" alt="jikoni-image">
    <div class="flex-container">
        <h1 class="title"> ${result.recipe.label}</h1>
        <a href="#" class="view-button"> View Recipe</a>
    </div>
        
        `

    })
    searchResultDiv.innerHTML=generatedHTML
}

})