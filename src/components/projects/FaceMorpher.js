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
                Created the frontend which lets users upload two faces and calls our API to morph them together
                </li>
                <li>
                Reduced server load by adding frontend error handling so users upload images with valid sizes and formats before being able to morph
                </li>
                <li>
                Added analytics showing <span className="Important-text">37,000 image files generated </span>from uploads and morphs between Nov 2021 and Feb 2022
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