import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import InfoIcon from '@mui/icons-material/Info';

function Greeting({text, activePage}) {
    return ( 
        <div className="Greeting">
            {text}
            <ButtonGroup aria-label="outlined primary button group" className="Greeting-btns">
                <Link to="/">
                <Button className={activePage === "about" ? "Greeting-btn Greeting-btn-active" : "Greeting-btn"}>
                    <InfoIcon className="Greeting-icon" />
                    About
                    </Button>
                </Link>
                <Link to="/projects" >
                    <Button className={activePage === "projects" ? "Greeting-btn Greeting-btn-active" : "Greeting-btn"} >
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
        </div>
    )
}

export default Greeting;