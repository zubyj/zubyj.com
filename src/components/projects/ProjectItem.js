import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function ProjectItem({name, icon, buttonName, path, imgPath, description}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    const open = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('project opened');
        window.open(path, '_blank');
    }

    const img = <img className="Project-img" src={imgPath} alt="Project screenshot" />

    return (
        <Container className="Grid-item" onClick={handleClick}>
            <div className="Item-title">
                {name}
                <span className="Title-icon">{icon}</span>
            </div>
            <Button className="Open-project-btn" onClick={open} variant="contained" target="_blank">
                {buttonName}
            </Button>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <span className="Project-title">
                    {img}
                </span>
                    <span>{description}</span>
            </ReactCardFlip>
        </Container>
    )
}

export default ProjectItem;