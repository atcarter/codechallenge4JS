const ul = document.getElementById('art-list')

const url = "http://localhost:3000/categories"

function fetchCategory(){
  
  fetch(url)
  .then(response => response.json())
  .then(data => {debugger})
}