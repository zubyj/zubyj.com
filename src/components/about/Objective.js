import React from 'react';
import GridItem from './AboutItem';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

function Objective() {

    const sideA = 
        <div className="Objective">
            <ul>
                <li>
                    Looking for job opportunities
                </li>
                <li>
                    Entry level Software Engineer
                </li>
                <li>
                    Interested in Full-stack
                </li>
            </ul>
            <Button className="Hire-btn" variant="contained" target="_blank" href="mailto:zubyjaved95@gmail.com">
                Hire Me
            </Button> 
        </div>

    const sideB = 
        <div className="Objective">
            <ul>
                <li>
                    <p>Interested in full-stack but open to anything </p>
                </li>
                <li>
                    <Button variant="outlined" target="_blank" href="mailto:zubyjaved95@gmail.com">
                        <ArticleIcon />
                        Download Resume
                    </Button>
                </li>
                <li>
                <Button 
                    variant="outlined"
                    target="_blank"
                    href="mailto:zubyjaved95@gmail.com"
                >
                    <EmailIcon />
                    Copy Email
                </Button>
                </li>
            </ul>



        </div>

    const icon = <CallToActionIcon className="Objective-icon" />

    return (
        <GridItem name="Objective" icon={icon} sideA={sideA} sideB={sideB}/>
    )
}

export default Objective;