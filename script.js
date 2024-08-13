'use strict';


// Initializing
function init() {
    getFromLocalStorage();
    renderHeader();
    renderSidebar();
    renderTopbar();
    renderHeadlineAndText();
    renderBooks();
    renderGoogleMaps();
    renderFooter();
}


// Render Header
function renderHeader(header) {
    let headerContentRef = document.getElementById('header');
    headerContentRef.innerHTML += getHeaderTemplate(header);
}


// Render Sidebar
function renderSidebar(sidebar) {
    let sidebarContentRef = document.getElementById('sidebar');
    sidebarContentRef.innerHTML += getSidebarTemplate(sidebar);
}


//Render Topbar
function renderTopbar(topbar) {
    let topbarContentRef = document.getElementById('topbar');
    topbarContentRef.innerHTML += getTopbarTemplate(topbar);
}


// Render Headline And Text
function renderHeadlineAndText(head) {
    let headlineAndTextContentRef = document.getElementById('headline');
    headlineAndTextContentRef.innerHTML += getHeadlineAndTextTemplate(head);
}


// Render Books
function renderBooks() {
    let booksContentRef = document.getElementById('books');
    booksContentRef.innerHTML += "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        booksContentRef.innerHTML += getBooksTemplate(books[bookIndex], bookIndex);
    }
}


// Render Comments From Book
function renderCommentsFromBook(book) {
    let commentsHtml = '';
    for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
        commentsHtml += getCommentsFromBook(book.comments[commentIndex]);
    }

    return commentsHtml;
}


// Render Googlemaps
function renderGoogleMaps(maps) {
    let googleContentRef = document.getElementById('location');
    googleContentRef.innerHTML += getGoogleTemplate(maps);
}


// Render Footer
function renderFooter(footer) {
    let footerContentRef = document.getElementById('footer')
    footerContentRef.innerHTML += getFooterTemplate(footer);
}


// Add Comments
function addComment(bookIndex) {
    let inputCommentRef = document.getElementById('comment_input' + bookIndex);
    let inputComment = inputCommentRef.value;

    if (inputComment !== "") {
        books[bookIndex].comments.push({
            name: "Anonymous",
            comment: inputComment
        });


        inputCommentRef.value = "";

        let commentsWrapperRef = document.getElementById('comments' + bookIndex);
        commentsWrapperRef.innerHTML = renderCommentsFromBook(books[bookIndex]);
    }

    saveToLocalStorage();
}


// Toggle Like Status
function toggleLikeStatus(bookIndex) {
    books[bookIndex].liked = !books[bookIndex].liked;

    updateLikeCount(bookIndex, books[bookIndex].liked);

    let likeImgRef = document.getElementById('like-btn' + bookIndex);
    likeImgRef.src = books[bookIndex].liked ? './assets/icons/liked_heart.png' : './assets/icons/not_liked_heart.png';

    saveToLocalStorage();
}


// Update Like Count
function updateLikeCount(bookIndex, increment) {
    if (increment) {
        books[bookIndex].likes += 1;
    } else {
        books[bookIndex].likes -= 1;
    }

    let likeCountRef = document.getElementById('like-count' + bookIndex);
    likeCountRef.innerText = books[bookIndex].likes;

    saveToLocalStorage();
}




