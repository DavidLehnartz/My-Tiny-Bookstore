'use strict';


// Save Data To Local Storage
function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}


// Initialize From Local Storage
function getFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem('books'));
    if (savedBooks) {
        books = savedBooks;
    }
}