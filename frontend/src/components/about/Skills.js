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

    const languages = ['React Native, NodeJS, ExpressJS, Python, Java, Javascript, C++'];
    const technologies = ['Agile/Scrum, Git, Vim, Nginx, Unity, Expo, DigitalOcean, MaterialUI, Twitter Bootstrap, AJAX, jQuery, PRAW, Google Maps API, Google Analytics']

    const [openLanguages, setOpenLanguages] = useState(false);
    const [openTechnologies, setOpenTechnologies] = useState(false);

    const toggleShowLanguages = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenLanguages(!openLanguages);
    }

    const toggleShowTechnologies = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenTechnologies(!openTechnologies);
    }

    const sideA = 
        <div className="Skills">
            <List>
                <ListItemButton onClick={toggleShowLanguages}>
                    <ListItemIcon className="Skills-dropdown-icon">
                        <LanguageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Languages and Frameworks" />
                    {openLanguages ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openLanguages} timeout="auto" unmountOnExit>
                        <ListItemText className="Project-languages" primary={languages} />
                </Collapse>
            </List>
        </div>
    const sideB = 
        <div className="Skills">
            <List>
                <ListItemButton onClick={toggleShowTechnologies}>
                    <ListItemIcon className="Skills-dropdown-icon">
                        <LanguageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Technologies" />
                    {openTechnologies ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openTechnologies} timeout="auto" unmountOnExit>
                        <ListItemText className="Project-languages" primary={technologies} />
                </Collapse>
            </List>
        </div>

    const icon = <CodeIcon className="Skills-icon"/>

    return (
        <div>
            <GridItem name="Skills" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Skills;