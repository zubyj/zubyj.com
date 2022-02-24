import React from 'react';
import GridItem from './AboutItem';
import WorkIcon from '@mui/icons-material/Work'

function Experience() {

    const sideA = 
        <div>
            <h4 className="Job-title">Freelance Web Developer</h4>
            <a className="App-link" target="_blank" href="https://appnaca.org" onClick={(e) => e.stopPropagation()}>
                <p>appnaca.org</p>
            </a>
            <p className="Dates">Sep 2020 - Present</p>
            <p>Created main website for American nonprofit organization, APPNA’s Northern California Chapter</p>
            <p>
                <span className="Important-text">447 </span>
                unique visitors
            </p>
        </div>

    const sideB = 
        <div>
            <h4 className="Job-title">Free Health Clinic Volunteer 
            </h4>
            <a className="App-link" target="_blank" href=".org" onClick={(e) => e.stopPropagation()}>
                <p>Free Health Clinic Website</p>
            </a>
            <p className="Dates"> Sep 2021 - Dec 2021</p>
            Researched, ordered, delivered, and assembled essential medical equipment leading to the 
            <span className="Important-text"> clinic’s launch in December 2021</span>
        </div>

    const icon = <WorkIcon className="Experience-icon" />

    return (
        <div>
            <GridItem name="Experience" icon={icon} sideA={sideA} sideB={sideB}/>
        </div>
    )
}

export default Experience;