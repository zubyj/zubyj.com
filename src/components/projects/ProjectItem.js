import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function ProjectItem({name, icon, imgPath, sideA, sideB}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    const img = <img className="Project-img" src={imgPath} alt="Project screenshot" />



    return (
        <div className="Grid-item" onClick={handleClick}>
            <div className="Item-title">
                <span>{icon}{name}</span>
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <span className="Side-a">
                        {sideA}
                        {img}
                    </span>
                    <span className="Side-b">{sideB}</span>
            </ReactCardFlip>
        </div>
    )
}

export default ProjectItem;