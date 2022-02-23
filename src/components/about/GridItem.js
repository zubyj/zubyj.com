import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function GridItem({name, icon, sideA, sideB}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="Grid-item" onClick={handleClick}>
            <span className="Item-title">{name}</span>
            <span className="Title-icon">{icon}</span>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <span className="Side-a">{sideA}</span>
                    <span className="Side-b">{sideB}</span>
            </ReactCardFlip>
        </div>
    )
}

export default GridItem;