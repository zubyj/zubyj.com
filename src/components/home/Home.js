import React from 'react';
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid";

// Cards
import Education from './cards/Education';
import Objective from './cards/Objective';
import HomeGreeting from './HomeGreeting';

import Technologies from './cards/Technologies';


function Home() {

    let gridItems = [
        <Objective />,
        <Education />,
        <Technologies />,
    ]

    return (
        <Box>
            <Grid className="Greeting-menu">
                <HomeGreeting className="Home-greeting" />
            </Grid>
            <Grid className="Home " container spacing={3}>
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

export default Home;