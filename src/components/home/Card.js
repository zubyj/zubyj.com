import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'

function Card({ name, icon, sideA, sideB }) {

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

    return (
        <Container className="Grid-item" onClick={handleClick}>
            <div className="Item-title">
                <span className="Title-icon">{icon}</span>
                {name}
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <span>{sideA}</span>
                <span>{sideB}</span>
            </ReactCardFlip>
        </Container>

    )
}

export default Card;