import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Avatar from '@mui/material/Avatar';


function Greeting() {
    return ( 
        <div>
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
            <span className="Greeting-btns">
                <Avatar 
                        className="Avatar"
                        alt="Zuby Javed" 
                        src={require("../img/selfie.png")}
                        sx={{width: 150, height: 150}}
                />
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Link to="/" className="Greeting-btn">
                        <Button>Projects</Button>
                    </Link>
                    <Link to="/about" className="Greeting-btn">
                        <Button>About</Button>
                    </Link>
                </ButtonGroup>
            </span>
        </div>
    )
}

export default Greeting;