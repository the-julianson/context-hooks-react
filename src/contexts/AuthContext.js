import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     }

     // Create a toggle function that when is called, it will change the state
     // authenticated or "not authenticated"
     toggleAuth = () => {
         this.setState({isAuthenticated : !this.state.isAuthenticated});
     }

    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;
