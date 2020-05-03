import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  return (
    // We define a consumer, that consumes a context that returns our JSX
    // inside the context are the props, we dont use this in here.
    // we can consume multiple context in one component in these way.
    // we can also use it in functional components
    <AuthContext.Consumer>
      {authContext => (
        <ThemeContext.Consumer>
          {themeContext => {
            const { isAuthenticated, toggleAuth } = authContext;
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>

                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>
                    <button onClick={toggleAuth}>
                      {isAuthenticated ? "sign out" : "sign in"}
                    </button>
                  </li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  ); // return
}; //arrowFunc

export default Navbar;
