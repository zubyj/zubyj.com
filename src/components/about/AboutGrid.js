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

function AboutGrid() {
    // On large devices, instead of greeting being first item, it should be in the center
    function useLargeScreen() {
        const matches = useMediaQuery('(min-width: 1200px)');
        console.log(matches);
        return matches;
    }

    let aboutItems = [
        <AboutGreeting />,
        <Objective />,
        <Education />,
        <Skills />,
        <Experience />,
        <Projects/>,
     ];
     
     if (useLargeScreen() ) {
         aboutItems = [
             <Objective />,
             <Education />,
             <Skills />,
             <Experience />,
             <AboutGreeting />,
             <Projects/>,
         ]
     }

    return (
        <Box>
            <Grid className="About-grid" container spacing={3}>
                {aboutItems.map((item, index) => {
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