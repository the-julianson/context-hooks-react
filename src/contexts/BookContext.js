import React, {createContext, useState} from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books] = useState([
        {title: "the rise of superman", id: uuid()},
        {title: "the art of learning", id: uuid()},
        {title: "the 4 hour workweek", id: uuid()},
        {title: "abundance", id: uuid()},
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;