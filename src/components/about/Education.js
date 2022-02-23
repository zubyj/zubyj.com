import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AboutItem from './AboutItem';
import Avatar from '@mui/material/Avatar';

function Education() {

    const content = () => {
        return (
            <div className="Education">
                <Avatar 
                    className="Avatar"
                    alt="Zuby Javed"
                    src={require("../../img/graduate.png")}
                    sx={{width: 150, height: 150}}
                />
                <ul>
                    <li>San Jose State University</li>
                    <li>B.S. , Computer Science</li>
                    <li>May 2018 - December 2021</li>
                </ul>
            </div>

        )
    }

    return (
        <div>
            <AboutItem name="Education" icon={<SchoolIcon className="About-item-icon Education-icon" />} content={content()} />
        </div>
    )
}

export default Education;