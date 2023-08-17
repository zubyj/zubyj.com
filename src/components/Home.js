import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typewriter from 'typewriter-effect';
import NavigationButtons from './NavigationButtons';
import Project from './Project';
import projectsData from '../assets/projects.json';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {

    const homeGreetingTypewriter = () => {
        return (
            <Typewriter
                onInit={(typewriter) =>
                    typewriter.changeDelay(60)
                        .typeString("<h1>Hello I'm <span class='Important-text'>Zuby</span></h1>")
                        .typeString("<h4 style='padding-bottom: 2rem;'>Software Engineer | CS @ SJSU '22</h4>")
                        .pauseFor(1000)
                        .typeString("<p>Welcome to my portfolio</p>")
                        .pauseFor(1000)
                        .deleteChars(23)
                        .changeDelay(90)
                        .typeString("Open to job opportunities")
                        .start()
                }
            />
        )
    }

    const projectsGreetingTypewriter = () => {
        return (
            <Typewriter
                onInit={(typewriter) =>
                    typewriter.typeString("<h2>Projects</h2>")
                        .changeDelay(50)
                        .typeString("<p><span class='Important-text'>(3)</span> Chrome Extension published</p>")
                        .typeString("<p><span class='Important-text'>(2)</span> iOS apps published</p>")
                        .typeString("<p><span class='Important-text'>(7)</span> Websites live</p>")
                        .changeDelay(30)
                        .typeString("<p><span class='Important-text'>(2)</span> Web apps deployed</p>")
                        .typeString("<p><span class='Important-text'>(1)</span> Windows/MacOS apps available</p>")
                        .pauseFor(1000)
                        .typeString("<span class='App-link'>Stay tuned for more</span>")
                        .pauseFor(1000)
                        .start()
                }
            />
        )
    }

    const [projects, setProjects] = useState([]);
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');

    useEffect(() => {
        let items = projectsData.map((project) => (
            <Project
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
            items.splice(4, 0, <NavigationButtons text={projectsGreetingTypewriter()} activePage="projects" key="greeting" />);
        } else {
            items.unshift(<NavigationButtons text={projectsGreetingTypewriter()} activePage="projects" key="greeting" />);
        }

        setProjects(items);
    }, [isLargeScreen]);

    return (
        <Box>
            <Grid className="Greeting-menu">
                <NavigationButtons text={homeGreetingTypewriter()} activePage="home" />
            </Grid>
            <Box>
                <Grid className="Projects-grid" container spacing={3}>
                    {projects.map((item, index) => (
                        <Grid key={item.props.key || index} item xs={12} lg={4}>
                            {item}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;
