import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function NavigationButtons({ text, activePage }) {

    // Function to handle the scrolling to the Projects-Grid
    const scrollToProjectsGrid = () => {
        const element = document.querySelector('.Projects-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="Typewriter">
            {text}
            <ButtonGroup aria-label="outlined primary button group" className="Typewriter-btns">
                <Button
                    className="Typewriter-btn"
                    target="_blank"
                    href="https://github.com/zubyj"
                >
                    <GitHubIcon className="Typewriter-icon" />
                    Github
                </Button>
                <Button
                    className="Typewriter-btn"
                    onClick={scrollToProjectsGrid}
                >
                    <FolderSpecialIcon className="Typewriter-icon" />
                    Projects
                </Button>
                <Button
                    className="Typewriter-btn"
                    target="_blank"
                    href="https://linkedin.com/in/zubyj"
                >
                    <LinkedInIcon className="Typewriter-icon" />
                    Linkedin
                </Button>

            </ButtonGroup>
        </div >
    )
}

export default NavigationButtons;