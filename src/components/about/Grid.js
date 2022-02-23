import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 

function Grid9x9({gridItems}) {
    return (
        <Box >
            <Grid  className="Projects-grid" container spacing={3}>
                {gridItems.map((item) => {
                    return (
                        <Grid className="Project-item" item sm={12} md={4}>
                            {item}
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Grid;