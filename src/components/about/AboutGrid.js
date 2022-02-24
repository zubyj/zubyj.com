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
import Typewriter from 'typewriter-effect';

function AboutGrid() {
    return (
        <Box>
            <Grid className="About-grid" container spacing={3}>
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

const typewriter = () => {
    return (
        <Typewriter
        onInit={(typewriter) => 
            typewriter.typeString("<h2>Hi Im <span style='color:#DEBE22'>Zuby Javed</span></h2>")
            .typeString("<h4>Software Engineer</h4>")
            .pauseFor(1000)
            .typeString("<p>Welcome to my portfolio</p>")
            .pauseFor(1000)
            .deleteChars(23)
            .typeString("Open to job opportunities")
            .start()
        }
        />
    )
}

const aboutItems = [
   <Objective />,
   <Education />,
   <Skills />,
   <Experience />,
   <Greeting text={typewriter()} section="about"/>,
   <Projects/>,
];

export default AboutGrid;