import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import InfoIcon from '@mui/icons-material/Info';

function Navbar() {
    return (
        <Container className="Navbar">
            <AppBar position="static">
                <ButtonGroup aria-label="outlined primary button group">
                    Zuby Javed
                    <Link to="/" >
                        <Button className="Greeting-btn" variant='contained'>
                            <InfoIcon className="Greeting-icon" />
                            About Me
                        </Button>
                    </Link>

                    <Link to="/projects" >
                        <Button className="Greeting-btn" variant='contained'>
                            <FolderSpecialIcon className="Greeting-icon" />
                            Projects
                        </Button>
                    </Link>
                </ButtonGroup>
            </AppBar>
        </Container>

    )
}

export default Navbar