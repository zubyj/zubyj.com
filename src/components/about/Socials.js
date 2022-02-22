
import React from 'react';
import AboutItem from './AboutItem';
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Socials() {

    const content = () => {
        return (
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
        )
    }

    return (
        <div>
            <AboutItem name="Socials" icon={<ContactMailIcon />} content={content()} />
        </div>
    );
}

export default Socials