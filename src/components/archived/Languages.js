import React from 'react';
import Grid from '@mui/material/Grid';
import GridItem from '../about/AboutItem';
import CodeIcon from '@mui/icons-material/Code';

import js from '../../img/languages/js.svg';
import python from '../../img/languages/python.svg';
import react from '../../img/languages/react2.svg';
import reactNative from '../../img/languages/react-native.svg';
import java from '../../img/languages/java.svg';
import node from '../../img/languages/node.svg';

function Languages() {

    const langs = {

    }

    let names = Object.keys(langs);
    let icons = Object.values(langs);

    const sideA = 
        <Grid className="Languages-grid" container spacing={3}>
            {icons.map((icon) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item">
                        <img src ={icon} className="Languages-icon" />
                    </Grid>
                )
            })}
        </Grid>

    const sideB = 
        <Grid className="Languages-grid" container spacing={3}>
            {names.map((name) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item Languages-name">
                        <span>{name}</span>
                    </Grid>
                )
            })}
        </Grid>

    const icon = <CodeIcon className="Skills-icon"/>

    return (
        <div>
            <GridItem name="Languages" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Languages;