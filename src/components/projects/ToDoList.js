import React from 'react';
import ProjectItem from './ProjectItem';
import ChatIcon from '@mui/icons-material/Chat';

function ToDoList() {

    const name = "To Do List"

    const sideA = 
        <div>
            <h4>Website</h4> 
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

    const icon = <ChatIcon />

    const imgPath = require('../../img/projects/To-do-list.png')

    return (
        <div>
            <ProjectItem name={name} icon={icon} imgPath={imgPath} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default ToDoList;