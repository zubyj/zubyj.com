import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

function ProjectItem({name, icon, imgPath, sideA, sideB}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    const img = <img className="Project-img" src={imgPath} alt="Project screenshot" />

    return (
        <Container className="Grid-item" onClick={handleClick}>

            <div className="Item-title">
                {name}
                <span className="Title-icon">{icon}</span>
            </div>
            <Button variant="outlined">
                Open Project
            </Button>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <span className="Side-a">
                        {sideA}
                        {img}
                    </span>
                    <span className="Side-b">{sideB}</span>
            </ReactCardFlip>
        </Container>
    )
}

export default ProjectItem;