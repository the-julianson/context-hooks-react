import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Lista de libros a leer</h1>
        <p>{books.length === 0 ? `` : `Hasta ahora tienes ${ books.length } libro${books.length === 1 ? `` : `s`} sin leer`}</p>
        </div>
    );
}

export default NavBar;