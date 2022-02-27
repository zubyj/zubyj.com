import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

function ProjectItem({name, icon, buttonName, path, imgPath, description}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
        clearTimeout();
    }   

    const open = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(path, '_blank');
    }

    const img = <img className="Project-img" src={imgPath} alt="Project screenshot" />

    useEffect(() => {
        const timeout = () => {
            setTimeout(() => {
                setIsFlipped(!isFlipped);
            }, 4000)
        } 
    })

    return (
        <Container className="Grid-item" onClick={handleClick}>
            <div className="Item-title">
                <span className="Title-icon">{icon}</span>
                {name}
                <Button className="Open-project-btn" onClick={open} variant="contained" target="_blank">
                    {buttonName}
                </Button>
            </div>
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