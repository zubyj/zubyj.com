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
                Managed 2 frontend and 2 backend engineers by <span className="Important-text">leading scrum meetings and code reviews</span>
                </li>
                <li>
                Created and hosted the landing page where users can download iCare for Windows and MacOS
                </li>
                <li>
                Class Project for CS160 Software Engineering taken at SJSU
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