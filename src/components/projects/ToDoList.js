import React from 'react';
import ProjectItem from './ProjectItem';
import ListIcon from '@mui/icons-material/List';

function ToDoList() {

    const name = "To Do List"
    const icon = <ListIcon className="Todolist-icon" />
    const buttonName = "Open Web App"
    const path = '/projects/to-do-list/';
    const imgPath = require('../../img/projects/To-do-list.png')

    const description = 
        <div>
            <ul>
                <li>
                    Created because To do lists are getting too complicated nowadays. 
                </li> 
                <li>
                    Add, remove, edit, and finish is all you need.
                </li> 
                <li className="Project-languages">
                    ReactJS, MaterialUI, Nginx
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description}/>
        </div>
    )
}

export default ToDoList;