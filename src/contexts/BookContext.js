import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

// now we use the reducer that takes the reducer and the initial state as parameters
const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [
  ]);
  
// we now pass the dispatch to the children, so nothing is going to work yet. 
  
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
