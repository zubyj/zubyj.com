import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function NavigationButtons({ text, activePage }) {

    // Function to handle the scrolling to the Projects-Grid
    const scrollToProjectsGrid = () => {
        const element = document.querySelector('.projects-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="nav-buttons">
            {text}
            <ButtonGroup aria-label="outlined primary button group" className="typewriter-buttons">
                <Button
                    className="typewriter-btn"
                    target="_blank"
                    href="https://github.com/zubyj"
                >
                    <GitHubIcon className="typewriter-icon" />
                    Github
                </Button>
                <Button
                    className="typewriter-btn"
                    onClick={scrollToProjectsGrid}
                >
                    <FolderSpecialIcon className="typewriter-icon" />
                    Projects
                </Button>
                <Button
                    className="typewriter-btn"
                    target="_blank"
                    href="https://linkedin.com/in/zubyj"
                >
                    <LinkedInIcon className="typewriter-icon" />
                    Linkedin
                </Button>

            </ButtonGroup>
        </div >
    )
}

export default NavigationButtons;