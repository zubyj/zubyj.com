import React from 'react';
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function Socials() {

    return (
        <div>
            <Button variant="outlined">
                    <a target="_blank" href="https://github.com/zubyjaved">
                        <GitHubIcon />
                    </a>
                    Github
                </Button>
                <Button variant="outlined">
                    <a target="_blank" href="mailto:zubyjaved95@gmail.com">
                        <EmailIcon />
                    </a>
                    Email
            </Button> 
        </div>
    )
}

export default Socials