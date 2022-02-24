import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';


function Greeting() {
    return ( 
        <div className="Greeting">
            <Typewriter
                onInit={(typewriter) => 
                    typewriter.typeString("Welcome to my portfolio")
                    .pauseFor(1000)
                    .deleteChars(15)
                    .pauseFor(1000)
                    .typeString("<h2>Im Zuby Javed</h2>")
                    .pauseFor(1000)
                    .typeString("Software Engineer")
                    .start()
                }
            />
                <Avatar 
                        className="Avatar"
                        alt="Zuby Javed" 
                        src={require("../img/selfie.png")}
                        sx={{width: 150, height: 150}}
                />
                <span className="Greeting-btns">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Link to="/" className="Greeting-btn">
                            <Button variant="outlined">
                                <FolderSpecialIcon />
                                Projects
                            </Button>
                        </Link>
                        <Link  to="/about" className="Greeting-btn">
                            <Button variant="outlined">About Me</Button>
                        </Link>
                        <Button
                            className="Greeting-btn"
                            variant="outlined"
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