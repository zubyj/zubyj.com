import React from 'react';
import AboutItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';

function Skills() {

    const content = () => {
        return (
            <div>
                <p>ReactJS, React Native, NodeJS, ExpressJS, Python, Java, Javascript, C++</p>
            </div>
        )
    }

    return (
        <div>
            <AboutItem name="Skills" icon={<CodeIcon className="About-item-icon Skills-icon"/>} content={content()} />
        </div>
    )
}

export default Skills;