import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import './Navbar.scss'

function Navbar({active}) {

    let getClassName = (activeClass) => {
        if (active === activeClass) {
            return "Nav-link Nav-link-active shadows";
        }
        return "Nav-link shadows"
    }

    return (
        <AppBar className="Navbar" position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div" className="Nav-title">
                <section>
                    Zuby Javed
                </section>
                </Typography>
                <Link to="/" className={getClassName("about")}>
                    ABOUT
                </Link>
                <Link to="/projects" className={getClassName("projects")}>
                    PROJECTS
                </Link>
                <a target="_blank" href="https://github.com/zubyjaved" className="Nav-link shadows">
                    GITHUB    
                </a>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar