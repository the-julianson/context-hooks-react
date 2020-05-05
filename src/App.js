import React from 'react';

import Navbar from './components/navbar.component';
import BookList from './components/booklist.component';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

// i can choose to place the AuthContext provider around the ThemeContextProvider, 
// also, if for example, just my navbar needs to now about the context, then it will only
// go there
function App() {
  
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
      <Navbar/>
      <BookContextProvider>
      <BookList/>
      </BookContextProvider>
      <ThemeToggle/>
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
