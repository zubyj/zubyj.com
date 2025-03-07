import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavigationButtons({ text, activePage, className }) {

    // Function to handle the scrolling to the Projects-Grid
    const scrollToProjectsGrid = () => {
        const element = document.querySelector('.projects-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={`nav-buttons ${className || ''}`}>
            {text}
            <ButtonGroup
                aria-label="outlined primary button group"
                className="typewriter-buttons"
                size={useMediaQuery('(min-width:600px)') ? 'large' : 'medium'}
                sx={{ gap: 2 }}  // Add spacing between buttons (2 * 8px = 16px gap)
            >
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