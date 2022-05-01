import React from 'react';
import ProjectItem from './ProjectItem';
import TimerIcon from '@mui/icons-material/Timer';

function CountdownTimer() {

    const name = "Countdown Timer";
    const icon = <TimerIcon className="Timer-icon" />;
    const buttonName = "Open download page";
    const path = "https://icaretimer.com";
    const imgPath = require('../../img/projects/iCare.png');

    const description = 
        <div>
            <ul>
                <li>
                    Smart countdown timer to prevent eye strain by following the 20-20-20 principle
                </li>
                <li>
                    Class Project for CS160 Software Engineering. Managed a team of 4 developers by <span className="Important-text">leading code reviews and leading weekly scrum meetings</span>
                </li>
                <li className="Project-languages">
                    ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description} />
        </div>
    )
}

export default CountdownTimer;