import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

function Navbar({active}) {

    let getClassName = (activeClass) => {
        if (active === activeClass) {
            return "Nav-link Nav-link-active";
        }
        return "Nav-link"
    }

    return (
        <AppBar className="Navbar" position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div" className="Nav-title">
                    Zuby Javed
                </Typography>
                <Link to="/" className={getClassName("about")}>
                    About Me
                </Link>
                <Link to="/projects" className={getClassName("projects")}>
                    Projects
                </Link>
                <a target="_blank" href="https://github.com/zubyjaved" className="Nav-link">
                    Github    
                </a>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar