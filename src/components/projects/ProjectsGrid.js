import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 

import Greeting from '../Greeting'
import FaceMorpher from './FaceMorpher';
import Appnaca from './Appnaca';
import CountdownTimer from './CountdownTimer';
import TheOfficeResponseBot from './TheOfficeResponseBot';
import Typewriter from 'typewriter-effect';

// Projects Grid items
function ProjectsGrid() {
    return (
        <Box >
            <Grid  className="Projects-grid" container spacing={3}>
                {projectItems.map((item, index) => {
                    return (
                        <Grid key={index} className="Project-item" item sm={12} md={4}>
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
            typewriter.typeString("<h2>My Projects</h2>")
            .pauseFor(1000)
            .typeString("<p>These are some of my favorite and most notable projects</p>")
            .typeString("I hope to fill this page up over the next few years.")
            .pauseFor(1000)
            .typeString("Stay tuned")
            .deleteChars(10)
            .typeString("My careers just getting started")
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
    <FaceMorpher />,
];

export default ProjectsGrid;