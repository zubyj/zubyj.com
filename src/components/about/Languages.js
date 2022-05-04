import React from 'react';
import Grid from '@mui/material/Grid';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';
import js from '../../img/icons/js.svg';
import python from '../../img/icons/python.svg';
import react from '../../img/icons/react.svg';
import reactNative from '../../img/icons/react-native.svg';
import java from '../../img/icons/java.svg';
import node from '../../img/icons/node.svg';

function Languages() {

    const langs = {
        'Javascript': js,
        'Python' : python,
        'ReactJS' : react,
        'Java': java,
        'React Native' : reactNative,
        'NodeJS' : node,
    }

    let names = Object.keys(langs);
    let icons = Object.values(langs);

    const sideA = 
        <Grid className="Languages-grid" container spacing={5}>
            {icons.map((icon) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item">
                        <img src ={icon} className="Languages-icon" />
                    </Grid>
                )
            })}
        </Grid>

    const sideB = 
        <Grid className="Languages-grid" container spacing={5}>
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