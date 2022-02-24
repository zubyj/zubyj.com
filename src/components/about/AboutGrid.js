import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 

// About Grid items
import Education from './Education';
import Objective from './Objective';
import Skills from './Skills';
import Projects from './Projects';
import Greeting from '../Greeting';
import Experience from './Experience';

function AboutGrid() {
    return (
        <Box >
            <Grid container spacing={3}>
                {aboutItems.map((item, index) => {
                    return (
                        <Grid key={index} item sm={12} md={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

const aboutItems = [
   <Education />,
   <Objective />,
   <Skills />,
   <Experience />,
   <Greeting />,
   <Projects/>,
];

export default AboutGrid;