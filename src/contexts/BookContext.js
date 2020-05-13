import React, { createContext, useReducer, useEffect  } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

// now we use the reducer that takes the reducer and the initial state as parameters
const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    //this will let us persist the data in the local storage, we pass a third function in the case that there is an empty
    // object in second arguments??? 
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  //we will use useEffect to handle the data oout of the app, in this case to local storage, but it could be to an
  //external API and monitor for books
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);
  
// we now pass the dispatch to the children, so nothing is going to work yet. 
  
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;