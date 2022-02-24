import React from 'react';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'

function Skills() {

    const skills = ['React Native', 'NodeJS', 'ExpressJS', 'Python', 'Java', 'Javascript', 'C++'];

    const sideA = 
        <div className="Skills">
            <List>
                {skills.map((skill) => {
                    return (
                        <ListItem>
                            <ListItemText primary={skill} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    
    
    const sideB = 
        <div className="Skills">
            Side B
        </div>

    const icon = <CodeIcon className="Skills-icon"/>

    return (
        <div>
            <GridItem name="Skills" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Skills;