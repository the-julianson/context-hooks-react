import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar.component';
import BookList from './components/BookList.component';
import NewBookForm from './components/BookForm.component';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
