'use strict';


function getHeaderTemplate() {
    return `
        <header class="div">
            <h2>My Tiny Bookstore</h2>
            <img class="page-logo" src="./assets/icons/wolf.jpg" alt="wolf">

            <div class="hamburger">
                <input type="checkbox" id="click">
                <label for="click">
                    <div class="frame">
                        <div class="line-top"></div>
                        <div class="line-middle"></div>
                        <div class="line-bottom"></div>
                    </div>
                </label>
                <ul>
                    <li><a class="nav-links-burger-menu" href="#"><b>Club</b></a></li>
                    <li><a class="nav-links-burger-menu" href="#"><b>Events</b></a></li>
                    <li><a class="nav-links-burger-menu" href="#location"><b>Location</b></a></li>
                </ul>
            </div>
        </header>

        <nav>
            <a class="nav-links" href="#">
                Club
            </a>
            <a class="nav-links" href="#">
                Events
            </a>
            <a class="nav-links" href="#location">
                Location
            </a>
        </nav>
    `;
}


function getSidebarTemplate() {
    return `
                <div class="seperator"></div>
                <div class="sidebar-nav">
                    <h3>Find Your Book</h3>

                    <div class="sidebar-categorys-wrapper">
                        <a class="sidebar-tabs" href="#children">
                            <span>Children</span>
                        </a>
                        <a class="sidebar-tabs" href="#bestseller">
                            <span>Bestseller</span>
                        </a>
                        <a class="sidebar-tabs" href="#classic">
                            <span>Classic</span>
                        </a>
                        <a class="sidebar-tabs" href="#fantasy">
                            <span>Fantasy</span>
                        </a>
                        <a class="sidebar-tabs" href="#romance">
                            <span>Romance</span>
                        </a>
                        <a class="sidebar-tabs" href="#thriller">
                            <span>Thriller</span>
                        </a>
                    </div>
                </div>
                <div class="seperator"></div>
    `;
}


function getTopbarTemplate() {
    return `
            <div class="topbar-categorys-wrapper">
                  <a class="topbar-tabs" href="#children">
                      <span class="topbar-span">Children</span>
                  </a>
                  <a class="topbar-tabs" href="#bestseller">
                      <span class="topbar-span">Bestseller</span>
                  </a>
                  <a class="topbar-tabs" href="#classic">
                      <span class="topbar-span">Classic</span>
                  </a>
                  <a class="topbar-tabs" href="#fantasy">
                      <span class="topbar-span">Fantasy</span>
                  </a>
                  <a class="topbar-tabs" href="#romance">
                      <span class="topbar-span">Romance</span>
                  </a>
                  <a class="topbar-tabs" href="#thriller">
                      <span class="topbar-span">Thriller</span>
                  </a>
            </div> 
    `;
}


function getHeadlineAndTextTemplate() {
    return `    
                <div class="headline">
                    <h1>Welcome To My Tiny Bookstore</h1>
                    <p>
                        Nestled in the heart of our charming community, My Tiny Bookstore is a haven for book lovers of
                        all ages. Here, stories come alive and imaginations soar. Whether you are in search of a gripping
                        mystery, a heartfelt romance, an adventurous fantasy, or a thoughtful memoir, our carefully
                        curated
                        selection has something special waiting just for you.
                        <br>
                        <br>
                        We take pride in creating a warm and inviting atmosphere where you can browse our shelves at
                        your
                        leisure, discover hidden gems, and find your next favorite read. Our friendly and knowledgeable
                        staff
                        are always here to offer personalized recommendations and share their love of books with you.
                        <br>
                        <br>
                        At My Tiny Bookstore, we believe in the magic of books and the joy of reading. We also host
                        regular events, from author signings and book clubs to storytime sessions for the little ones.
                        It is a place where the community gathers, connections are made, and stories are shared.
                        <br>
                        <br>
                        Thank you for visiting us. We are thrilled to be a part of your reading journey.
                        <br>
                        <br>
                        <br>
                        Happy reading!
                        <br>
                        <br>
                        Your Tiny Bookstore Team
                    </p>
                </div>
    `;
}


function getBooksTemplate(book, bookIndex) {
    return `    
            <div id="${book.genre.toLowerCase()}" class="book-category-wrapper">
                    <h3>${book.genre}</h3>

                 <div class="like-wrapper">
                  <p id="like-count${bookIndex}">${book.likes}</p>
                  <img id="like-btn${bookIndex}" onclick="toggleLikeStatus(${bookIndex})" class="like-btn" src="./assets/icons/${book.liked ? 'liked_heart.png' : 'not_liked_heart.png'}" alt="like">
                 </div>

                    <div class="book-wrapper">
                        <img class="book-imgs" src="${book.image}" alt="book">
                     
                        <table>
                            <tbody class="book-info">   
                                <tr>
                                    <td>
                                        <p>Title</p>
                                    </td>
                                    <td>${book.title}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Author</p>
                                    </td>
                                    <td>${book.author}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Year</p>
                                    </td>
                                    <td>${book.publishedYear}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Price</p>
                                    </td>
                                    <td>${book.price.toFixed(2)} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div class="comments-wrapper">
                        <h3>Comments</h3>

                        <div id="comments${bookIndex}" class="comment-box">
                            <table>
                                <tbody>
                                  ${renderCommentsFromBook(book)}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="input-wrapper">
                        <textarea id="comment_input${bookIndex}" class="comment-input" placeholder="Leave your comment"></textarea>          

                        <button onclick="addComment(${bookIndex})" class="btn"> 
                            <img class="btn-img" src="./assets/icons/pencil_white.png" alt="pencil">
                            Submit
                        </button>
                    </div>
                    <div class="category-seperator"></div> 
             </div>           
    `;
}


function getCommentsFromBook(comment) {
    return `
            <tr>
                <td><strong>${comment.name}</strong></td>
                 <td>${comment.comment}</td>
            </tr>
    `;
}


function getGoogleTemplate() {
    return `
              <h5>Find Us At</h5>
            <div class="Find-us-at-adress">
              <img class="map-marker-img" src="./assets/icons/marker.png" alt="map marker">
              <b>City Centre Kathmandu</b>
            </div>
            <iframe class="googlemaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0636334043023!2d85.32598566956325!3d27.70942638581467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19091da0e19b%3A0xc4598923d9d99381!2sCity%20Centre!5e0!3m2!1sde!2sde!4v1722443735330!5m2!1sde!2sde"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
}


function getFooterTemplate() {
    return `
            <footer>
              <h4>Feed Your Mind, Feed Your Soul</h4>
            </footer>
    `;
}
 