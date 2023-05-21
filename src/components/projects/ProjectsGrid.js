import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectsGreeting from './ProjectsGreeting';
import ProjectItem from './ProjectItem';
import projects from '../../assets/projects.json';

function ProjectsGrid() {
    const [projectItems, setProjectItems] = useState([]);
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');

    useEffect(() => {
        let items = projects.map((project) => (
            <ProjectItem
                key={project.name}
                name={project.name}
                icon={project.icon}
                path={project.path}
                pathType={project.pathType}
                imgName={project.imgName}
                description={project.description}
            />
        ));

        if (isLargeScreen) {
            items.splice(4, 0, <ProjectsGreeting key="greeting" />);
        } else {
            items.unshift(<ProjectsGreeting key="greeting" />);
        }

        setProjectItems(items);
    }, [isLargeScreen]);

    return (
        <Box>
            <Grid className="Projects-grid" container spacing={3}>
                {projectItems.map((item, index) => (
                    <Grid key={item.props.key || index} item xs={12} lg={4}>
                        {item}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectsGrid;
