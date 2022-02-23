import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AboutItem from './AboutItem';

function Education() {

    const content = () => {
        return (
            <ul>
                <li>San Jose State University</li>
                <li>B.S. , Computer Science</li>
                <li>May 2018 - December 2021</li>
            </ul>
        )
    }

    return (
        <div>
            <AboutItem name="Education" icon={<SchoolIcon className="About-item-icon Education-icon" />} content={content()} />
        </div>
    )
}

export default Education;