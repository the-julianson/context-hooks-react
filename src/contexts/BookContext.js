import React, { createContext, useState } from "react";
import  uuid from "uuid/dist/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: uuid() },
    { title: "the final empire", author: "brandon sanderson", id: uuid() }
  ]);
  // when we use setBooks it will create a brand new object
  const addBook = (title, author) => {
    const newBooks = [...books, { title, author, id: uuid() }];
    setBooks(newBooks);
  };

  //filter is a function that removes whatever is not matching our parameter
  // we are looping trough books, each one es book, then we access the id with book.id and if {book.id !== id} (not equal to passed id)
  // then we want to keep that book in our array
  const removeBook = id => {
    const newBooks = books.filter(book => book.id !== id);
    setBooks(newBooks);
  };
  
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
