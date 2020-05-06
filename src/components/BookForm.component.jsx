import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      
      addBook(title, author);
      setTitle('');
      setAuthor('');
      //console.log(title, author);
      //prevents default helps to avoid refreshing the page. It will never work 
      // because react always updates the page when we re-render
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book"/>
    </form>
  );
};

export default NewBookForm;
