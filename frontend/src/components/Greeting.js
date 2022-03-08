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
                    <Link to="/" >
                    <Button className="Greeting-btn" variant={section==="about" ? 'contained' : 'outlined'}>
                        <InfoIcon className="Greeting-icon" />
                        About Me
                        </Button>
                    </Link>
                    <Link to="/projects" >
                        <Button className="Greeting-btn" variant={section==="projects" ? 'contained' : 'outlined'}>
                            <FolderSpecialIcon className="Greeting-icon" />
                            Projects
                        </Button>
                    </Link>
                    <Button
                        className="Greeting-btn"
                        target="_blank" 
                        href="https://github.com/zubyjaved"
                    >
                        <GitHubIcon className="Greeting-icon"/>
                        Github
                    </Button>
                </ButtonGroup>
            </span>
        </div>
    )
}

export default Greeting;