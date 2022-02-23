
import React from 'react';
import GridItem from './GridItem';
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Socials() {

    const sideA = 
        <div>
            <Button
                variant="outlined"
                target="_blank" 
                href="https://github.com/zubyjaved"
            >
                <GitHubIcon />
                Github
            </Button>

            <Button 
            variant="outlined"
            target="_blank"
            href="mailto:zubyjaved95@gmail.com"
            >
                <EmailIcon />
                Email
            </Button>
        </div>

    const sideB = 
        <div>
            Side B
        </div>

    const icon = <ContactMailIcon className="Socials-icon" />

    return (
        <div>
            <GridItem name="Socials" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    );
}

export default Socials