import React from 'react';
import AboutItem from './AboutItem';
import InterestsIcon from '@mui/icons-material/Interests';

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
            <AboutItem name="Interests" icon={<InterestsIcon />} content={content()} />
        </div>
    )
}

export default Interests;