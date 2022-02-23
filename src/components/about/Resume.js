import React from 'react';
import AboutItem from './AboutItem';

import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';

function Resume() {

    const content = () => {
        return (
            <Button variant="outlined" target="_blank" href="mailto:zubyjaved95@gmail.com">
                Download CV
            </Button>
        )
    }

    return (
        <div>
            <AboutItem name="Resume" icon={<ArticleIcon className="About-item-icon Resume-icon" />} content={content()} />
        </div>
    )
}

export default Resume;