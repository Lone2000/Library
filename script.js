// Book objects inside an array 
let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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


    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
})

function addBookToLibrary(title, author, pages, readInput){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)

    renderBookElement()
}

// Dom manipulation
let main = document.querySelector('main')


function renderBookElement(){

    
    let book_card = document.createElement("div")
    book_card.classList.add("book-card")
    book_card.innerHTML = `
            <div class="description">
                <h2>Harry Potter</h2>
                <h3>by JK Rolling</h3>
                <p>Pages: 312</p>
            </div>
            <div class="action-btns">
                <button class="read">Not Read</button>
                <button class="del">Delete</button>
            </div>
            <div class="status">On Progress</div>
    `
    //  Append to main
    main.appendChild(book_card);
}