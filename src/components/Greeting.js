import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import InfoIcon from '@mui/icons-material/Info';

function Greeting({text, section}) {
    return ( 
        <div className="Greeting">
            {text}
            <span className="Greeting-btns">
                <ButtonGroup aria-label="outlined primary button group">
                    <Link to="/" className="Greeting-btn">
                    <Button variant={section==="about" ? 'contained' : 'outlined'}>
                        <InfoIcon />
                        About Me
                        </Button>
                    </Link>
                    <Link to="/projects" className="Greeting-btn">
                        <Button variant={section==="projects" ? 'contained' : 'outlined'}>
                            <FolderSpecialIcon />
                            Projects
                        </Button>
                    </Link>
                    <Button
                        className="Greeting-btn"
                        target="_blank" 
                        href="https://github.com/zubyjaved"
                    >
                        <GitHubIcon />
                        Github
                    </Button>
                </ButtonGroup>
            </span>
        </div>
    )
}

export default Greeting;