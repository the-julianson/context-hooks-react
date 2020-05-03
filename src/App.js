import React from 'react';

import Navbar from './components/navbar.component';
import BookList from './components/booklist.component';
import ThemeContextProvider from './contexts/ThemeContext';

//Navbar and BookList are attached to the props of the ThemeContextProvider (father) 
//so we have to pass the props down to the children {this.props.children}
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar/>
      <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
