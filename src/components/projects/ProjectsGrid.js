import React from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import ProjectsGreeting from './ProjectsGreeting';
import FaceMorpher from './cards/FaceMorpher';
import Appnaca from './cards/Appnaca';
import CountdownTimer from './cards/CountdownTimer';
import TheOfficeScriptAPI from './cards/TheOfficeScriptAPI';
import TheOfficeResponseBot from './cards/TheOfficeResponseBot';
import ToDoList from './cards/ToDoList';
import TippingCalculator from './cards/TippingCalculator';

// Projects Grid items
function ProjectsGrid() {
    let projectItems = [
        <FaceMorpher />,
        <Appnaca />,
        <CountdownTimer />,
        <TheOfficeScriptAPI />,
        <TheOfficeResponseBot />,
        <ToDoList />,
        <TippingCalculator />,
    ];

    /*
      Adds project component at location depending on screen size.
      If large screen, place at the center of the grid.
      If mobile, place as the first item of the grid.
    */
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    if (isLargeScreen) {
        projectItems.splice(4, 0, <ProjectsGreeting />);
    } else {
        projectItems.unshift(<ProjectsGreeting />);
    }

    return (
        <Box>
            <Grid className="Projects-grid" container spacing={3}>
                {projectItems.map((item) => {
                    return (
                        <Grid key={item.props.name} item xs={12} lg={4}>
                            {item}
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProjectsGrid;
