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
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({active}) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="Navbar" position="static">
                <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit" component="div" className="Nav-title">
                        Zuby Javed
                    </Typography>
                    <Link to="/" className={active === "about" ? "Nav-link Nav-link-active" : "Nav-link"}>
                        About Me
                    </Link>
                    <Link to="/projects" className={active === "projects" ? "Nav-link Nav-link-active" : "Nav-link"}>
                        Projects
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar