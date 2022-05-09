import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../Navbar';
import ProjectsGreeting from './ProjectsGreeting';
import FaceMorpher from './FaceMorpher';
import Appnaca from './Appnaca';
import CountdownTimer from './CountdownTimer';
import TheOfficeResponseBot from './TheOfficeResponseBot';
import ToDoList from './ToDoList';
import TippingCalculator from './TippingCalculator';

// Projects Grid items
function ProjectsGrid() {

    let  projectItems = [
        <FaceMorpher />,
        <Appnaca />,
        <CountdownTimer />,
        <TheOfficeResponseBot />,
        <ToDoList />,
        <TippingCalculator />,
    ];

    /*
    Adds project component at location depending on screen size. 
    If large screen, place at center of grid.
    If mobile, place at 1st of item of grid. 
    */
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    if (isLargeScreen) {
        projectItems.splice(4, 0, <ProjectsGreeting />);
    }
    else {
        projectItems.unshift(<ProjectsGreeting />);
    }

    return (
        <Box >
            <Navbar active="projects" />
            <Grid className="Projects-grid" container spacing={3}>
                {projectItems.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} lg={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}



export default ProjectsGrid;