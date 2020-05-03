import React, {useState, useEffect } from 'react';

// package for ids
import  uuid  from "uuid/dist/v1";
import NewSongFrom from './NewSongForm.component';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Las habladurias del mundo', id:uuid()},
        {title: 'Perdonado', id:uuid()},
        {title: 'Cancion para los dias de la vida', id:uuid()},
    ]);     
    
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}])
    }
    //running everytime or everytime the data in the component changes inside
    // I pass an araay, as second parameters, to things to check
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age])
    return ( 
    <div className="song-list">
        <ul>
            {songs.map(song => 
            <li key={song.id}>{song.title}</li>)}
        </ul>
        <NewSongFrom addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div> );
}
 
export default SongList;