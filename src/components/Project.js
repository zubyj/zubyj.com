import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

function Project({ name, path, pathType, imgName, description }) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAutoFlip, setIsAutoFlip] = useState(true);

    // duration in milliseconds.
    const startAutoFlip = (duration) => {
        const timer = setTimeout(() => setIsFlipped(!isFlipped), 4000);
        setTimeout(() => setIsAutoFlip(false), duration);

        if (!isAutoFlip) {
            clearTimeout(timer);
        }
    }

    startAutoFlip(8000);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
        setIsAutoFlip(false);
    }

    const open = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(path, '_blank');
    }

    const img = <img className="project-img" src={require(`../assets/images/projects/${imgName}`)} alt="Project screenshot" />

    return (
        <Container className="grid-item" onClick={handleClick}>
            <div className="item-title">
                {/* <span className="title-icon">{icon}</span> */}
                {name}
                <div>
                    <Button className="open-project-btn" onClick={open} variant="contained" target="_blank">
                        Open {pathType}
                    </Button>
                </div>
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <span className="project-img">
                    {img}
                </span>
                <ul>
                    {description.map((line) => {
                        return <li className="project-languages">
                            {line}
                        </li>
                    })}
                </ul>
            </ReactCardFlip>
        </Container>
    )
}

export default Project