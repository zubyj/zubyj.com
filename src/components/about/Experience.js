import React from 'react';
import GridItem from './GridItem';
import WorkIcon from '@mui/icons-material/Work'

function Experience() {

    const sideA = 
        <div>
            <h4>Freelance Web Developer</h4>
            <p>Sep 2020 - Present</p>
            <p>appnaca.org</p>
            <p>Created main website for American nonprofit organization, APPNA’s Northern California Chapter</p>
            <p>447 unique visitors</p>
        </div>

    const sideB = 
        <div>
            Side B
        </div>

    const icon = <WorkIcon className="Experience-icon" />

    return (
        <div>
            <GridItem name="Experience" icon={icon} sideA={sideA} sideB={sideB}/>
        </div>
    )
}

export default Experience;