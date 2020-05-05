import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// class AuthContextProvider extends React.Component {
//     state = { 
//         isAuthenticated: false
//      }

//      // Create a toggle function that when is called, it will change the state
//      // authenticated or "not authenticated"
//      toggleAuth = () => {
//          this.setState({isAuthenticated : !this.state.isAuthenticated});
//      }

//     render() { 
//         return ( 
//             <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//          );
//     }
// }
 
// export default AuthContextProvider;

const AuthContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect( ( )=> {
        console.log("use effect ran")
    });


    const toggleAuth = () => {
        console.log(isAuthenticated);
        setIsAuthenticated(!isAuthenticated);
        console.log(isAuthenticated);
    }

    return ( 
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
