import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import GridItem from '../Card';
import Avatar from '@mui/material/Avatar';

function Education() {

    const sideA =
        <div className="Grad-pic">
            <Avatar
                alt="Zuby J"
                src={require("../../../assets/images/graduate.png")}
                sx={{ width: 200, height: 200 }}
            />
        </div>

    const sideB =
        <ul className="List School-list">
            <li className="List-item School">San Jose State University</li>
            <li className="List-item Degree">B.S. , Computer Science</li>
            <li className="List-item School-years">2018 - 2022</li>
        </ul>

    const icon = <SchoolIcon className="Education-icon" />

    return (
        <div>
            <GridItem name="Education" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Education;