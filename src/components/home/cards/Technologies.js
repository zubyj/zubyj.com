import React from 'react';
import { Grid } from '@mui/material';
import GridItem from '../Card';
import CodeIcon from '@mui/icons-material/Code';

// Languages
import js from '../../../assets/images/languages/js.svg';
import python from '../../../assets/images/languages/python.svg';
import react from '../../../assets/images/languages/react.svg';
import reactNative from '../../../assets/images/languages/react-native.svg';
import java from '../../../assets/images/languages/java.svg';
import node from '../../../assets/images/languages/node.svg';

// Technologies
import git from '../../../assets/images/technologies/git.svg';
import vim from '../../../assets/images/technologies/vim.svg';
import npm from '../../../assets/images/technologies/npm.svg';
import nginx from '../../../assets/images/technologies/nginx.svg';
import bootstrap from '../../../assets/images/technologies/bootstrap.svg';
import expo from '../../../assets/images/technologies/expo.svg';

function Technologies() {
    const langs = {
        Javascript: js,
        Python: python,
        ReactJS: react,
        Java: java,
        'React Native': reactNative,
        NodeJS: node,
        Git: git,
        Vim: vim,
        Npm: npm,
        Bootstrap: bootstrap,
        Expo: expo,
        Nginx: nginx,
    };

    let names = Object.keys(langs);
    let icons = Object.values(langs);

    const sideA = (
        <Grid className="Languages-grid" container spacing={3}>
            {icons.map((icon) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item" key={icon}>
                        <img src={process.env.PUBLIC_URL + icon} className="Languages-icon" alt="Languages and Frameworks" />
                    </Grid>
                );
            })}
        </Grid>
    );

    const sideB = (
        <Grid className="Languages-grid" container spacing={3}>
            {names.map((name) => {
                return (
                    <Grid item xs={4} className="Languages-grid-item Languages-name" key={name}>
                        <span>{name}</span>
                    </Grid>
                );
            })}
        </Grid>
    );

    const icon = <CodeIcon className="Skills-icon" />;

    return (
        <div>
            <GridItem name="Technologies" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    );
}

export default Technologies;
