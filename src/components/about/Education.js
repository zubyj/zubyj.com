import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import GridItem from './GridItem';
import Avatar from '@mui/material/Avatar';

function Education() {

    const sideA = 
        <div>
            <Avatar 
                className="Avatar"
                alt="Zuby Javed"
                src={require("../../img/graduate.png")}
                sx={{width: 250, height: 250}}
            />
        </div>

    const sideB = 
        <ul>
            <li>San Jose State University</li>
            <li>B.S. , Computer Science</li>
            <li>May 2018 - December 2021</li>
        </ul>

    const icon = <SchoolIcon className="Education-icon"/>

    return (
        <div>
            <GridItem name="Education" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Education;