import React from 'react';
import ProjectItem from './ProjectItem';
import ArticleIcon from '@mui/icons-material/Article';

function CountdownTimer() {

    const name = "Smart Countdown Timer"

    const sideA = 
        <div>
            <h3>icaretimer.com</h3>
            <h4>Windows and MacOS App</h4> 
            <p>Smart countdown timer to prevent eye strain by following the 20-20-20 principle</p>
        </div>

    const sideB = 
        <ul>
            <li>
                Led a team of 4 developers by handling code reviews and leading weekly scrum meetings
            </li>
            <li>
                Available for MacOS & Windows
            </li>
            <li>
                ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions
            </li>
        </ul>

    const icon = <ArticleIcon className="About-item-icon Resume-icon" />

    const imgPath = require('../../img/projects/iCare.png')

    return (
        <div>
            <ProjectItem name={name} icon={icon} imgPath={imgPath} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default CountdownTimer;