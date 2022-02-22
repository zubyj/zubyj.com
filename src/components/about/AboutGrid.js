import React from 'react'; 
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"; 
import Greeting from '../Greeting';

// About items
import Skills from './Skills';
import Education from './Education';
import Socials from './Socials';


// MUI Icons
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function About() {
    return (
        <Box className="Projects-grid">
            <Grid  container spacing={3}>
                {aboutItems.map((item, index) => {
                    if (index === 4) {
                        return (
                            <Grid className="Project-item" item xs={4}> 
                                <Greeting /> 
                             </Grid> 
                        )
                    }
                    return (
                        <Grid className="Project-item" item xs={4}> 
                            <h3>
                                {item.title}
                                <span className="Icon">{item.icon}</span>
                            </h3>
                            <p>{item.content}</p>
                        </Grid> 
                    )
                })}
            </Grid>
        </Box>
    )
}

const aboutItems = [
    {
        title: "Skills",
        icon: <CodeIcon />,
        content: <Skills />,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: <Education />
    },
    {
        title: "Socials",
        icon: <ContactMailIcon />,
        content: <Socials /> 
    },
    {
        title: "Resume",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
    {
        title: "Education",
        icon: <SchoolIcon />,
        content: 
            <span>
                <p>
                    {"B.S. in Computer Science. SJSU. May 2018-December 2021"}
                </p>
            </span>,
    },
];

export default About;