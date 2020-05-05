import React, {useContext} from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends React.Component {
//     static contextType = ThemeContext;
//     render() { 
//         const {toggleTheme} = this.context;
//         return ( 
//             <button onClick={toggleTheme}>Toggle the theme</button>
//          );
//     }
// }

// export default ThemeToggle;

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>Toggle the theme</button>
     );
}
 
export default ThemeToggle;