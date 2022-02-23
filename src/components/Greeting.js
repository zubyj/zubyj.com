import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { ThreeDRotation } from '@mui/icons-material';


function Greeting() {

    const typewriter = () => {
        return (
            new Typewriter(
                '#typewriter', {
                    strings: ['Hi', 'Im', 'Zuby', 'Javed'],
                    autoStart: true,
                }
            )
        )
    }

    const str1 = 'Hi there';
    const str2 = <span className="My-name">Im Zuby Javed</span>;
    const str3 = 'Software Engineer'

    return ( 
        <div> 
            <h3>
            <Typewriter
                onInit={(typewriter) => 
                    typewriter.typeString("Welcome to my website")
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString("<h1>Hello World <h1>")
                    .deleteChars(6)
                    .typeString("<h2>Im Zuby Javed</h2>")
                    .pauseFor(1000)
                    .typeString("Software Engineer")
                    .start()
                }
                loop={true}
            />
            </h3>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Link to="/">
                    <Button>Projects</Button>
                </Link>
                <Link to="/about">
                    <Button>About</Button>
                </Link>
            </ButtonGroup>
        </div>

    )
}

export default Greeting;