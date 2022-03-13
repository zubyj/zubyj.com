import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 

import Navbar from '../Navbar';
import ProjectsGreeting from './ProjectsGreeting';
import FaceMorpher from './FaceMorpher';
import Appnaca from './Appnaca';
import CountdownTimer from './CountdownTimer';
import TheOfficeResponseBot from './TheOfficeResponseBot';
import ToDoList from './ToDoList';
import SharkAttack from './SharkAttack';
import TippingCalculator from './TippingCalculator';

// Projects Grid items
function ProjectsGrid() {
    return (
        <Box >
            <Navbar active="projects" />
            <Grid className="Projects-grid" container spacing={3}>
                {projectItems.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

const projectItems = [
    <FaceMorpher />,
    <Appnaca />,
    <CountdownTimer />,
    <TheOfficeResponseBot />,
    <ProjectsGreeting />,
    <ToDoList />,
    <SharkAttack />,
    <TippingCalculator />,
];

export default ProjectsGrid;