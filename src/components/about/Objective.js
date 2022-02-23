import React from 'react';
import GridItem from './GridItem';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Button from '@mui/material/Button';

function Objective() {

    const sideA = 
        <div>
            <p>Looking for full-time entry level Software Engineer opportunities </p>
            <Button variant="outlined" target="_blank" href="mailto:zubyjaved95@gmail.com">
                Hire Me
            </Button> 
        </div>

    const sideB = 
        <div>
            <p>Interested in full-stack development. </p>
        </div>

    const icon = <CallToActionIcon className="Objective-icon" />

    return (
        <GridItem name="Objective" icon={icon} sideA={sideA} sideB={sideB}/>
    )
}

export default Objective;