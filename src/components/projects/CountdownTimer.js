import React from 'react';
import ProjectItem from './ProjectItem';
import TimerIcon from '@mui/icons-material/Timer';

function CountdownTimer() {

    const name = "Smart Countdown Timer"
    const icon = <TimerIcon />
    const buttonName = "Open download page"
    const imgPath = require('../../img/projects/iCare.png')

    const description = 
        <div>
            <ul>
                <li>
                    Smart countdown timer to prevent eye strain by following the 20-20-20 principle
                </li>
                <li>
                    Led a team of 4 developers by handling code reviews and leading weekly scrum meetings
                </li>
                <li className="Project-languages">
                    ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} imgPath={imgPath} description={description} />
        </div>
    )
}

export default CountdownTimer;