class BookList {
    constructor() {
        this.books = [];
        this.favoriteBook = "";
    }

    addBook(title, author) {
        const newBook = { title, author };
        this.books.push(newBook);
    }

    setFavoriteBook(title) {
        this.favoriteBook = title;
    }

    getBooksList() {
        console.log("Kitoblar ro'yxati:");
        this.books.forEach(book => {
            console.log(`${book.title}, muallif: ${book.author}`);
        });
    }

    getFavoriteBook() {
        console.log("Sevimli kitob:", this.favoriteBook);
    }
}
const myBookList = new BookList();
myBookList.addBook("Sivilizatsiyalar toqnashuvi", "Henri Kissenjer");
myBookList.addBook("IKIGAI", "Hector Garcia");
myBookList.addBook("You've Reached Sam", "Dustin Thao");

myBookList.getBooksList();
myBookList.setFavoriteBook("IKIGAI");
myBookList.getFavoriteBook();
