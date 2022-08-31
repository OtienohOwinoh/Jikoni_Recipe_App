const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector ('.search-result');
const container = document.querySelector ('container');
let searchQuery = '';
const APP_ID ='3acb26b3';
const APP_key = '3b074862a1b0a5a50c91b34c1c53ba25';

searchForm.addEventListener ('submit', (e) =>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;

}
)