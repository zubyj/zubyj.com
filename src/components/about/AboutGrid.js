import React from 'react';
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid";

// Cards
import Education from './cards/Education';
import Objective from './cards/Objective';
import AboutGreeting from './AboutGreeting';
import Technologies from './cards/Technologies';


function AboutGrid() {

    let gridItems = [
        <Objective />,
        <Education />,
        <Technologies />,
    ]

    return (
        <Box>
            <Grid className="Greeting-menu">
                <AboutGreeting className="About-greeting" />
            </Grid>
            <Grid className="About-grid " container spacing={3}>
                {gridItems.map((item) => {
                    return (
                        <Grid key={item.props.name} item xs={12} lg={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default AboutGrid;