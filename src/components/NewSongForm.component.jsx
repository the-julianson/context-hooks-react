import React, { useState } from "react";

const NewSongFrom = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      addSong(title);
      setTitle('');
  }
  return (
    // event listener
    <form onSubmit={handleSubmit}>
      <label>Song name</label>
      <input 
        type="text"
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongFrom;
