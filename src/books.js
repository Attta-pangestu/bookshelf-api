const books = [];

module.exports = {
  getAllBooks: () => books,
  addBook: (book) => {
    const newBook = { id: nanoid(16), ...book };
    books.push(newBook);
    return newBook.id;
  },
  getBookById: (id) => books.find((book) => book.id === id),
  updateBookById: (id, updatedBook) => {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      return true;
    }
    return false;
  },
  deleteBookById: (id) => {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  },
};
