import React from 'react';
import ProjectItem from '../ProjectItem';
import TimerIcon from '@mui/icons-material/Timer';

function CountdownTimer() {

    const name = "Countdown Timer";
    const icon = <TimerIcon className="Timer-icon" />;
    const buttonName = "Open download page";
    const path = "https://icaretimer.com";
    const imgPath = require('../../../img/projects/iCare.png');

    const description =
        <div>
            <ul>
                <li>
                    Led a team of 4 engineers in developing a desktop application, utilizing agile methodologies by <span className="Important-text"> conducting scrum meetings, handling code reviews, and merging pull requests</span>
                </li>
                <li>
                    Designed and developed the backend functionality using MySQL and ExpressJS, including the implementation of user preference storage and retrieval, such as timer duration, custom sound notifications, and usage data analysis
                </li>
                <li className="Project-languages">
                    ElectronJS, ReactJS, ExpressJS,  MySQL, Trello, Nginx, Github Actions, and DigitalOcean
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