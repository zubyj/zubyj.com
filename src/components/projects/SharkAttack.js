import React from 'react';
import ProjectItem from './ProjectItem';
import ChatIcon from '@mui/icons-material/Chat';

function SharkAttack() {

    const name = "Shark Attack Game"
    const icon = <ChatIcon className="Response-bot-icon"/>
    const buttonName = "Open Browser Game"
    const path = '/projects/shark-attack/';
    const imgPath = require('../../img/projects/shark-attack-game.png');

    const description = 
        <div>
            <ul>
                <li>
                    Utilizes approximate string matching to find similarity score and respond to user only if score reaches a certain threshold 
                </li>
                <li>
                    Available for MacOS & Windows
                </li>
                <li className="Project-languages">
                    ReactJS, PRAW (Python Reddit API Wrapper), ExpressJS, DigitalOcean, 
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} path={path} buttonName={buttonName} imgPath={imgPath} description={description} />
        </div>
    )
}

export default SharkAttack;