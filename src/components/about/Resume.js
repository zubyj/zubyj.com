import React from 'react';
import AboutItem from './AboutItem';

import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';

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
            <AboutItem name="Resume" icon={<SchoolIcon />} content={content()} />
        </div>
    )
}

export default Resume;