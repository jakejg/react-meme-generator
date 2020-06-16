import React, { useState } from 'react';
import './Meme.css';
import { useDispatch } from 'react-redux';

function Meme({id, image_url, top_text, bottom_text}) {
    const [deleteBtn, setDeleteBtn] = useState(false);

    const dispactch = useDispatch();

    let opacity;
    deleteBtn ? opacity = .5 : opacity = 1

    const toggleDeleteBtn = () => setDeleteBtn(!deleteBtn);

    const deleteMeme = (e) => dispactch({type: 'REMOVE', payload: id});

    return (
        <div onMouseEnter={toggleDeleteBtn} onMouseLeave={toggleDeleteBtn} className="Meme">
            <div className="Meme-top-text">{top_text}</div>
            <img style={{opacity}} className="Meme-image" src={image_url} alt="meme" />
            <div style={{opacity}} className="Meme-bottom-text">{bottom_text}</div>
            {deleteBtn && <div onClick={deleteMeme} className="Meme-delete">X</div>}
        </div>
    );
}

export default Meme;
