import React, { createContext, useState } from "react";

// We will use this one first in Navbar
export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  // ThemeContext.Provider will wrap and pass value to all the other components
  render() {
    return (
      //this refers to the the things wrapped in here
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

// const ThemeContextProvider = (props) => {

//   const [theme, setTheme] = useState([
//     {
//       isLightTheme: true,
//       light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//       dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
//     }
//   ])

//   const toggleTheme = () => {
//     setTheme({isLightTheme: !props.isLightTheme})
//   }
  
//   return ( 
//     <ThemeContext.Provider value={{...props.theme, toggleTheme}}>
//       {props.children}
//     </ThemeContext.Provider>
//    );
// }
 
// export default ThemeContextProvider;