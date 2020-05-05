import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar.component';
import BookList from './components/BookList.component';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
