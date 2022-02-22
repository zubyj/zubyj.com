import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AboutItem from './AboutItem';

function Experience() {

    const content = () => {
        return (
            <div>
                <ul>
                    <li>
                        <h4>Freelance Web Developer</h4>
                        <p>Sep 2020 - Present</p>
                        <p>appnaca.org</p>
                        <p>Created main website for American nonprofit organization, APPNA’s Northern California Chapter</p>
                        <p>447 unique visitors</p>
                    </li>
                    <li>
                        <h4>Free Health Clinic Volunteer</h4>
                        <p>Sep 2021 - Dec 2021</p>
                        <p>Worked directly with APPNA’s physicians to set up an inventory management sheet.</p>
                    </li>
                </ul>
            </div>

        )
    }

    return (
        <div className="Experience">
            <AboutItem name="Experience" icon={<SchoolIcon />} content={content()} />
        </div>
    )
}

export default Experience;