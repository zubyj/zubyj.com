import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import Greeting from '../Greeting';

// About items
import Skills from './Skills';
import Education from './Education';
import Socials from './Socials';
import Objective from './Objective';

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
   <Skills />,
   <Education />,
   <Greeting />,
   <Education />,
   <Education />,
   <Education />,
   <Socials />,
];

export default About;