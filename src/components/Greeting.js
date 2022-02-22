import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

function Greeting() {
    return ( 
        <div> 
            <h1 className="Greeting">Hi I'm Zuby Javed</h1>
            <h3>Software Engineer</h3>
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