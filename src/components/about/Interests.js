import React from 'react';
import GridItem from './GridItem';
import InterestsIcon from '@mui/icons-material/Interests';

function Interests() {

    const sideA = 
        <ul>
            <li>Backpacking</li>
            <li>Basketball</li>
            <li>Reading</li>
            <li>Piano</li>
        </ul>

    const sideB = 
        <ul>
            <li>PC Gaming</li>
            <li>Wasting time on Reddit</li>
            <li>Weightlifting</li>
        </ul> 

    const icon = <InterestsIcon className="Interests-icon" />

    return (
        <div>
            <GridItem name="Interests" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Interests;