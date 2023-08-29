// Book objects inside an array 
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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



    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
})

function addBookToLibrary(title, author, pages, readInput){

    let newBook = new Book(title, author, pages, readInput);


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

  // Read Status
  main.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('read')){
        // find which card
        const book_card = e.target.parentElement.parentElement;
        // Change status
        let status = book_card.querySelector(".read");
        console.log(book_card)

    //     myLibrary.forEach((Book) =>{
    //         Book.title = 
    //     })
    }
})