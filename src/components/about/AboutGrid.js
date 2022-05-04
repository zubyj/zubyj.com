import React, { useState } from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../Navbar';

// Cards
import Education from './Education';
import Objective from './Objective';
import Experience from './Experience';
import AboutGreeting from './AboutGreeting';
import Languages  from './Languages';
import Technologies from './Technologies';

function AboutGrid() {

    let gridItems = [
        <Objective />,
        <Education />,
        <Experience />,
        <Languages />,
        <Technologies/>,
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