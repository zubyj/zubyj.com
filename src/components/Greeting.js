import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Greeting() {
    return ( 
        <div className="Greeting">
            <h1 className="Name">Zuby Javed</h1>
            <h3>Software Engineer</h3>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Projects</Button>
                    <Button>About</Button>
                </ButtonGroup>
        </div>

    )
}

export default Greeting;