import React from 'react';
import Grid from '@mui/material/Grid';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';


// Languages
import js from '../../img/languages/js.svg';
import python from '../../img/languages/python.svg';
import react from '../../img/languages/react2.svg';
import reactNative from '../../img/languages/react-native.svg';
import java from '../../img/languages/java.svg';
import node from '../../img/languages/node.svg';

//Technologies
import git from '../../img/technologies/git.svg';
import vim from '../../img/technologies/vim.svg';
import npm from '../../img/technologies/npm.svg';
import nginx from '../../img/technologies/nginx.svg';
import bootstrap from '../../img/technologies/bootstrap.svg';
import expo from '../../img/technologies/expo.svg';

function Technologies() {

    const langs = {
        'Javascript': js,
        'Python' : python,
        'ReactJS' : react,
        'Java': java,
        'React Native' : reactNative,
        'NodeJS' : node,
        'Git': git,
        'Vim': vim,
        'Npm': npm,
        'Bootstrap': bootstrap,
        'Expo': expo,
        'Nginx': nginx,
    }

    let names = Object.keys(langs);
    let icons = Object.values(langs);

    const sideA = 
        <Grid className="Languages-grid" container spacing={3}>
            {icons.map((icon) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item">
                        <img src ={icon} className="Languages-icon" alt="Languages and Frameworks" />
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
            <GridItem name="Technologies" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Technologies;