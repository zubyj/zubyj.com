import React from 'react';
import ProjectItem from './ProjectItem';
import ListIcon from '@mui/icons-material/List';

function ToDoList() {

    const name = "To Do List"
    const icon = <ListIcon className="Todolist-icon" />
    const buttonName = "Open Website"
    const imgPath = require('../../img/projects/To-do-list.png')

    const description = 
        <div>
            <ul>
                <li>
                    Smart countdown timer to prevent eye strain by following the 20-20-20 principle
                </li> 
                <li>
                    Led a team of 4 developers by handling code reviews and leading weekly scrum meetings
                </li>
                <li>
                    Available for MacOS and Windows
                </li>
                <li>
                    ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} imgPath={imgPath} description={description}/>
        </div>
    )
}

export default ToDoList;