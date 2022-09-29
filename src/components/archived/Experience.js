import React from 'react';
import GridItem from '../about/AboutItem';
import WorkIcon from '@mui/icons-material/Work'

function Experience() {

    const sideA = 
        <div>
            <h4 className="Job-title">Freelance Web Developer</h4>
            <a className="App-link" target="_blank" href="https://appnaca.org" onClick={(e) => e.stopPropagation()}>
                <p>appnaca.org</p>
            </a>
            <p className="Dates">Sep 2020 - Present</p>
            <p>Developed and hosted the main website for a local nonprofit organization</p>
            <p>
                <span className="Important-text">447 </span>
                unique visitors
            </p>
        </div>

    const sideB = 
        <div>
            <ul>
                <li>
                Worked with chapter president to add content including donation campaigns and <span className="Important-text">scheduling appointments for free health clinics</span> offered in San Jose, CA
                </li>
                <li>
                Reached  <span className="Important-text"> 486 </span> visitors since the website deployed
                </li>
                <li className="Project-languages">
                NodeJS, Bootstrap, Nginx, ExpressJS, Google Maps API, Google Analytics, DigitalOcean</li>
            </ul>
        </div>

    const icon = <WorkIcon className="Experience-icon" />

    return (
        <div>
            <GridItem name="Experience" icon={icon} sideA={sideA} sideB={sideB}/>
        </div>
    )
}

export default Experience;