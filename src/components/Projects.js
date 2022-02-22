import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import Greeting from './Greeting';
import Project from './Project';

function Projects() {
    return (
        <Box className="Projects-grid">
            <Grid  container spacing={3}>
                {projects.map((project, index) => {
                    if (index === 4) {
                        return (
                            <Grid className="Project-item" item xs={4}> 
                                <Greeting /> 
                             </Grid> 
                        )
                    }
                    return (
                        <Grid className="Project-item" item xs={4}> 
                            <Project name={project.name} imgPath={project.path} />
                        </Grid> 
                    )
                })}
            </Grid>
        </Box>
    )
}

const projects = [
    {
        name: "MyMorph",
        path: require('../img/projects/MyMorph.png'),
    },
    {
        name: "appnaca.org",
        path: require('../img/projects/appnaca.png'),
    },
    {
        name: "iCare",
        path: require('../img/projects/iCare.png'),
    },
    {
        name: "To Do List",
        path: require('../img/projects/To-do-list.png'),
    },
    // Centered Greeting (empty for now)
    {
    },
    {
        name: "The Office Reponse Bot",
        path: require('../img/projects/The-Office-Response-Bot.png'),
    },
    {
        name: "iCare",
        path: require('../img/projects/iCare.png'),
    },
    {
        name: "MyMorph",
        path: require('../img/projects/MyMorph.png'),
    },
    {
        name: "iCare",
        path: require('../img/projects/iCare.png'),
    },
];

export default Projects;