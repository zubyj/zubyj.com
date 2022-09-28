import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
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
        <Languages />,
        <Technologies/>,
    ]

    return (
        <Box>
            <Navbar active="about" />
            <Grid className="Greeting-menu">
                <AboutGreeting className="About-greeting"/>
            </Grid>
            <Grid className="About-grid " container spacing={3}>
                {gridItems.map((item, index) => {
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

export default AboutGrid;