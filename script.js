function makeBookList (bookListObject) {
    const textTitle = document.createElement('h3');
    textTitle.innerText = bookListObject.bookName;

    const textAuthor = document.createElement('p');
    textAuthor.innerText = bookListObject.authorName;

    const textYear = document.createElement('p');
    textYear.innerText = bookListObject.bookYear;
}