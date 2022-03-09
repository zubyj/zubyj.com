import React from 'react';
import ProjectItem from './ProjectItem';
import ChatIcon from '@mui/icons-material/Chat';

function TheOfficeResponseBot() {

    const name = "The Office Response Bot"
    const icon = <ChatIcon className="Response-bot-icon"/>
    const buttonName = "Open Web App"
    const path = 'http://zubyj.me/projects/the-office-response-bot';
    const imgPath = require('../../img/projects/The-Office-Response-Bot.png');

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
            <ProjectItem name={name} icon={icon} buttonName={buttonName} imgPath={imgPath} description={description} />
        </div>
    )
}

export default TheOfficeResponseBot;