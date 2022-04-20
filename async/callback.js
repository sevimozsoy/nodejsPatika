const books = [
    { name: "Kitap1", author: "Yazar1" },
    { name: "Kitap2", author: "Yazar2" },
    { name: "Kitap3", author: "Yazar3" }
];

const listBooks = () => {
    books.map(books => console.log(books.name));
}

const addBooks = (newBook , callback) => {
    books.push(newBook);
    callback();
};

addBooks({ name: "Kitap4", author: "Yazar4" }, listBooks);