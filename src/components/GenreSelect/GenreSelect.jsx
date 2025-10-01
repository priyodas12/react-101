import React, { useState } from 'react'
import './GenreSelect.css';


export default function GenreSelect({ genreList, selectedGenre, onSelect }) {

  const [genre, setGenre] = useState(selectedGenre);

  function onClickGenre(g) {
    setGenre(g);
    console.log("child:selected genre: ", g)
    if (onSelect) {
      onSelect(g);
    }
  }

  return (
    <div id="genre-select">
      <h3>Select Genre</h3>
      <nav>
        <div className='ul-genre'>
          {genreList.map((g, index) => (
            <button key={index} className={`${(g === genre) ? "active-genre" : "inactive-genre"}`} onClick={() => onClickGenre(g)}>
              {
                g
              }
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
