function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
   {
    const url = 'https://anapioficeandfire.com/api/books';
    return fetch(url) // Return the fetch promise
      .then(response => response.json()) // Parse response as JSON
      .then(data => renderBooks(data)) // Pass the data to renderBooks function
      .catch(error => console.error('Error fetching books:', error)); // Handle errors
  }
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
