import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import GridItem from './AboutItem';
import Avatar from '@mui/material/Avatar';

function Education() {

    const sideA = 
        <div className="Grad-pic">
            <Avatar 
                alt="Zuby Javed"
                src={require("../../img/graduate.png")}
                sx={{width: 200, height: 200}}
            />
        </div>

    const sideB = 
        <ul className="List School-list">
            <li className="List-item School">San Jose State University</li>
            <li className="List-item Degree">B.S. , Computer Science</li>
            <li className="List-item School-years">May 2018 - December 2021</li>
        </ul>

    const icon = <SchoolIcon className="Education-icon"/>

    return (
        <div>
            <GridItem name="Education" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Education;