import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
    
    //The static keyword defines a static method for a class. 
    //Static methods aren't called on instances of the class.
    // Instead, they're called on the class itself.

    // whit this we are saying, go and look for any context provider and attach 
    //it's props to me, so I can pass it down to this component.
    static contextType = ThemeContext;
    render() { 
        //console.log(this.context);
        // destructure to access the variables
        const {isLightTheme, light, dark} = this.context;

        const theme = isLightTheme ? light : dark;
        return ( 
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;