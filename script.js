// Book objects inside an array 
let myLibrary = [];

let nextId = 0; 

function Book(title, author, pages, read,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}


Book.prototype.status = function (status){
    if(status == "Y"){
        console.log(status)
        return "Read"
    }
    else{
        return "Not Read"
    }
}
// Dom Manipulation


form = document.getElementById("newBook")
// titleInput = document.getElementById('title')
// authorInput = document.getElementById('author')
// pagesInput = document.getElementById('pages')
// newBookButton = document.getElementById("submit")

form.addEventListener('submit', (e)=>{

    e.preventDefault() // prevents the form from AutoSubmiting

    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read").value;


    id = nextId++;
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput, id);
})

function addBookToLibrary(title, author, pages, readInput, id){


    let newBook = new Book(title, author, pages, readInput, id);


    myLibrary.push(newBook)

    renderBookElement(newBook)

    // Read Status


}

// Dom manipulation
let main = document.querySelector('main')


function renderBookElement(Book){
    let book_card = document.createElement("div")
    book_card.classList.add("book-card")
    book_card.innerHTML = `
            <div class="description">
                <h2 class='hidden'>${Book.id}</h2>
                <h2>${Book.title}</h2>
                <h3>by ${Book.author}</h3>
                <p>Pages: ${Book.pages}</p>
            </div>
            <div class="action-btns">
                <button class="read">${Book.status(Book.read)}</button>
                <button class="del">Delete</button>
            </div>
    `
    //  Append to main
    main.appendChild(book_card);
}


// Delete button

// Delete event listener
main.addEventListener('click', (e)=>{
    // See Which book card button was clicked
    if(e.target.classList.contains('del')){
        // Find which card
        const book_card = e.target.parentElement.parentElement
        // Remove this
        book_card.remove()
    }
})

  // Read Status Toggle
main.addEventListener('click' , (e) => {
    if (e.target.classList.contains('read')) {
        // Find the closest parent book card element
        const book_card = e.target.closest('.book-card');
        
        // Get the index of the book card in your library based on its ID
        const bookId = parseInt(book_card.querySelector('.description h2').textContent);
        const bookIndex = myLibrary.findIndex(book => book.id === bookId);

        
        // Toggle the read status in your library data
        myLibrary[bookIndex].read = (myLibrary[bookIndex].read === "Y") ? "N" : "Y";
        
        // Toggle the class on the book card
        book_card.classList.toggle('read');
        book_card.classList.toggle('not-read');
        
        // Update the button text
        const readButton = book_card.querySelector('.read');
        readButton.textContent = myLibrary[bookIndex].status(myLibrary[bookIndex].read);
    }
});
