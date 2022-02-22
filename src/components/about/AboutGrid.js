import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import Greeting from '../Greeting';

// About items
import Skills from './Skills';
import Education from './Education';
import Socials from './Socials';
import Objective from './Objective';
import Resume from './Resume'; 
import Experience from './Experience';

// MUI Icons

function About() {
    return (
        <Box className="Projects-grid">
            <Grid  container spacing={3}>
                {aboutItems.map((item) => {
                    return (
                        <Grid className="Project-item" item xs={4}>
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
   <Resume />,
   <Experience />,
   <Greeting />,
   <Skills />,
   <Education />,
   <Education />,
   <Socials />,
];

export default About;