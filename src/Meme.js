import React from 'react';
import './Meme.css';

function Meme({image_url, top_text, bottom_text}) {


  return (
    <div className="Meme">
        <div className="Meme-top-text">{top_text}</div>
        <img className="Meme-image" src={image_url} alt="meme" />
        <div className="Meme-bottom-text">{bottom_text}</div>
    </div>
  );
}

export default Meme;
