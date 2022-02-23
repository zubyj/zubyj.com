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
import Interests from './Interests';
import Resume from './Resume'; 
import Socials from './Socials';

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
   <Experience />,
   <Greeting />,
   <Projects/>,
   <Socials />,
   <Interests />,
   <Resume />,
];

export default About;