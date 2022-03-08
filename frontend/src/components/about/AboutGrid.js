import React, { useState } from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import useMediaQuery from '@mui/material/useMediaQuery';

import Education from './Education';
import Objective from './Objective';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import AboutGreeting from './AboutGreeting';
import Navbar from '../Navbar';

function AboutGrid() {

    let gridItems = [
        <Objective />,
        <Education />,
        <Skills />,
        <Experience />,
        <Projects/>,
    ]

    /*
    Adds greeting component at location depending on screen size. 
        If large screen, place at center of grid.
        If mobile, place at 1st of item of grid. 
    */
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    if (isLargeScreen) {
        gridItems.splice(4, 0, <AboutGreeting />);
    }
    else {
        gridItems.unshift(<AboutGreeting />);
    }

    return (
        <Box>
            <Navbar active="about" />
            <Grid className="About-grid" container spacing={3}>
                {gridItems.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} md={6} lg={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default AboutGrid;