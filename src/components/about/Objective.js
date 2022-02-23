import React from 'react';
import AboutItem from './AboutItem';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Button from '@mui/material/Button';

function Objective() {

    const content = () => {
        return (
            <div>
                <p>Looking for full-time entry level Software Engineer opportunities </p>
                <p>Interested in full-stack</p>
                <Button variant="outlined" target="_blank" href="mailto:zubyjaved95@gmail.com">
                    Hire Me
                </Button> 
            </div>
        )
    }

    return (
        <div>
            <AboutItem name="Objective" icon={<CallToActionIcon className="About-item-icon Objective-icon" />} content={content()} />
        </div>
    )
}

export default Objective;