import React from 'react';
import AboutItem from './AboutItem';
import WorkIcon from '@mui/icons-material/Work'

function Experience() {

    const content = () => {
        return (
            <div>
                <h4>Freelance Web Developer</h4>
                <p>Sep 2020 - Present</p>
                <p>appnaca.org</p>
                <p>Created main website for American nonprofit organization, APPNA’s Northern California Chapter</p>
                <p>447 unique visitors</p>
            </div>

        )
    }

    return (
        <div>
            <AboutItem name="Experience" icon={<WorkIcon className="About-item-icon Experience-icon" />} content={content()} />
        </div>
    )
}

export default Experience;