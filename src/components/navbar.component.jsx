import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  return (
    // We define a consumer, that consumes a context that returns our JSX
    // inside the context are the props, we dont use this in here.
    // we can consume multiple context in one component in these way.
    // we can also use it in functional components
    <ThemeContext.Consumer>
      {context => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
