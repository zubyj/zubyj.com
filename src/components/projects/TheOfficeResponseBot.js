import React from 'react';
import ProjectItem from './ProjectItem';
import ChatIcon from '@mui/icons-material/Chat';

function TheOfficeResponseBot() {

    const name = "The Office Response Bot"
    const icon = <ChatIcon className="Response-bot-icon"/>
    const buttonName = "Open Web App"
    const path = '/projects/the-office-response-bot/';
    const imgPath = require('../../img/projects/The-Office-Response-Bot.png');

    const description = 
        <div>
            <ul>
                <li>
                Created Reddit bots that respond to comments resembling lines from NBC’s The Office
                </li>
                <li>
                Generates between <span className="Important-text">3-4k upvotes/karma per week</span> while live
                </li>
                <li>
                Uses fuzzy string matching to find the closest matching line to the user text and responds with the following line from the script
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

export default TheOfficeResponseBot;