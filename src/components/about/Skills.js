import React from 'react';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';

function Skills() {

    const sideA = 
        <div>
            ReactJS, React Native, NodeJS, ExpressJS, Python, Java, Javascript, C++
        </div>
    
    const sideB = 
        <div>
            Side B
        </div>

    const icon = <CodeIcon className="Skills-icon"/>

    return (
        <div>
            <GridItem name="Skills" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Skills;