import React from 'react';
import GridItem from './GridItem';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';

function Resume() {

    const sideA = 
        <div>
            <Button variant="outlined" target="_blank" href="mailto:zubyjaved95@gmail.com">
                Download CV
            </Button>
        </div>

    const sideB = 
        <div>
            Side B
        </div>

    const icon = <ArticleIcon className="About-item-icon Resume-icon" />

    return (
        <div>
            <GridItem name="Resume" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Resume;