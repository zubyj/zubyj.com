import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from '@mui/material/Container'

function AboutItem({name, icon, sideA, sideB}) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <Container maxWidth="lg" className="Grid-item" onClick={handleClick}>
            <div className="Item-title">
                {name}{icon}
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <span>{sideA}</span>
                    <span>{sideB}</span>
            </ReactCardFlip>
        </Container>
    )
}

export default AboutItem;