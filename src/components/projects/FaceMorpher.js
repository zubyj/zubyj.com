import React from 'react';
import ProjectItem from './ProjectItem';
import Link from '@mui/material/Link';
import PeopleIcon from '@mui/icons-material/People';

function FaceMorpher() {

    const name = "FaceMorpher";
    const icon = <PeopleIcon className="Facemorpher-icon" />
    const buttonName = "View in iOS App Store";
    const path = 'https://apps.apple.com/us/app/mymorph/id1554421298';
    const imgPath = require('../../img/projects/MyMorph.png')

    const description = 
        <div>
            <ul>
                <li>
                    Morph two faces together utilizing computer vision
                </li>
                <li>
                    <span className="Important-text">Generated ~37,000 image files </span>
                    between November 2021 and February 2022
                </li>
                <li>
                    Accumulated <span className="Important-text">~1,000 downloads</span>  to date
                </li>
                <li className="Project-languages">
                    React Native, Expo, Nginx, Python, Docker
                </li>

            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description} />
        </div>
    )
}

export default FaceMorpher;