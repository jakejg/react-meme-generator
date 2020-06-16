import React from 'react';
import { useSelector } from 'react-redux';
import './MemeContainer.css';

function MemeContainer() {
    const memes = useSelector(store => store.memes)

  return (
    <div className="MemeContainer">
        {memes}
    </div>
  );
}

export default MemeContainer;
