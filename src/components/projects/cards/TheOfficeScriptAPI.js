import React from 'react';
import ProjectItem from '../ProjectItem';
import ChatIcon from '@mui/icons-material/Chat';

function TheOfficeScriptAPI() {

    const name = "The Office Script API"
    const icon = <ChatIcon className="Response-bot-icon" />
    const buttonName = "Open Website"
    const path = "https://theofficescript.com/"
    const imgPath = require('../../../img/projects/the-office-script-api.png');

    const description =
        <div>
            <ul>
                <li>
                    Designed and developed REST API using ExpressJS and AWS RDS for interacting with characters from "The Office"
                </li>
                <li>
                    Implemented full-text search and levenshtein distance functionality for chatting with characters
                </li>
                <li className="Project-languages">
                    ExpressJS, PostgreSQL, AWS RDS, Postman, VueJS, NodeJS, Winston
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} path={path} buttonName={buttonName} imgPath={imgPath} description={description} />
        </div>
    )
}

export default TheOfficeScriptAPI;