import React from 'react';
import Grid from '@mui/material/Grid';
import GridItem from './AboutItem';
import CodeIcon from '@mui/icons-material/Code';

import git from '../../img/technologies/git.svg';
import vim from '../../img/technologies/vim.svg';
import npm from '../../img/technologies/npm.svg';
import nginx from '../../img/technologies/nginx.svg';
import analytics from '../../img/technologies/analytics.svg';
import trello from '../../img/technologies/trello.svg';
import digitalocean from '../../img/technologies/digitalocean.svg';
import bootstrap from '../../img/technologies/bootstrap.svg';
import expo from '../../img/technologies/expo.svg';

function Technologies() {

    const langs = {
        'Git': git,
        'Vim': vim,
        'Npm': npm,
        'Bootstrap': bootstrap,
        'Expo': expo,
        'Nginx': nginx,
        'Analytics': analytics,
        'Trello': trello,
        'Digitalocean': digitalocean,
    }

    let names = Object.keys(langs);
    let icons = Object.values(langs);

    const sideA = 
        <Grid className="Languages-grid" container spacing={5}>
            {icons.map((icon) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item Breathing">
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
            <GridItem name="Technologies" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Technologies;