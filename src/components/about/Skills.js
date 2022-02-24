import React, { useState } from 'react';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { ListSubheader } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';


function Skills() {

    const skills = ['React Native', 'NodeJS', 'ExpressJS', 'Python', 'Java', 'Javascript', 'C++'];

    const technologies = ['React Native, NodeJS, ExpressJS, Python, Java, Javascript, C++'];

    const [openLanguages, setOpenLanguages] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setOpenLanguages(!openLanguages);
    }

    const sideA = 
        <div className="Skills">
            <p>
                {skills}
            </p>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <LanguageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Languages and Frameworks" />
                    {openLanguages ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openLanguages} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    </List>
                </Collapse>
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