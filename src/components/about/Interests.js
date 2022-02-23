import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AboutItem from './AboutItem';

function Interests() {

    const content = () => {
        return (
            <ul>
                <li>Backpacking</li>
                <li>Basketball</li>
                <li>PC Gaming</li>
                <li>Weightlifting</li>
                <li>Piano</li>
                <li>Wasting time on Reddit</li>
            </ul>
        )
    }

    return (
        <div>
            <AboutItem name="Interests" icon={<SchoolIcon />} content={content()} />
        </div>
    )
}

export default Interests;