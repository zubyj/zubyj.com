import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 

import Greeting from '../Greeting'
import FaceMorpher from './FaceMorpher';
import Appnaca from './Appnaca';
import CountdownTimer from './CountdownTimer';
import TheOfficeResponseBot from './TheOfficeResponseBot';
import Typewriter from 'typewriter-effect';
import ToDoList from './ToDoList';

// Projects Grid items
function ProjectsGrid() {
    return (
        <Box >
            <Grid className="Projects-grid" container spacing={3}>
                {projectItems.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} md={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

const typewriter = () => {
    return (
        <Typewriter
        onInit={(typewriter) => 
            typewriter.typeString("<h2>Projects</h2>")
            .typeString("<p><span class='Important-text'>(3)</span> Websites deployed</p>")
            .typeString("<p><span class='Important-text'>(1)</span> iOS apps in the App Store</p>")
            .typeString("<p><span class='Important-text'>(1)</span>Windows/MacOS apps avaiable for download</p>")
            .typeString("<p>My careers just getting started</p>")
            .pauseFor(1000)
            .deleteChars(31)
            .typeString("<b>Stay tuned for more!</b>")
            .pauseFor(1000)
            .start()
        }
        />
    )
}

const projectItems = [
    <FaceMorpher />,
    <Appnaca />,
    <CountdownTimer />,
    <TheOfficeResponseBot />,
    <Greeting text={typewriter()} section="projects"/>,
    <ToDoList />,
];

export default ProjectsGrid;