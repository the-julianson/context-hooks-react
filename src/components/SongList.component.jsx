import React, {useState} from 'react';

// package for ids
import  uuid  from "uuid/dist/v1";

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Las habladurias del mundo', id:uuid()},
        {title: 'Perdonado', id:uuid()},
        {title: 'Cancion para los dias de la vida', id:uuid()},
    ]);      

    // setSongs will change and completeley replace
    const addSong = () => {
        setSongs([...songs, {title: "new song", id: uuid()}])
    }
    return ( 
    <div className="song-list">
        <ul>
            {songs.map(song => 
            <li key={song.id}>{song.title}</li>)}
        </ul>
        <button onClick={addSong}>Add song</button>
    </div> );
}
 
export default SongList;