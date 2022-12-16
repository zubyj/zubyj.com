import React from 'react';
import ProjectItem from './ProjectItem';
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
                Worked with a backend developer to design and build an iOS app from their existing morph API
                </li>
                <li>
                Reduced server load by adding frontend error handling to ensure users upload images with valid sizes and formats 
                </li>
                <li>
                Added analytics showing <span className="Important-text">37,000 image files generated </span>from uploads and morphs between Nov 2021 and Feb 2022
                </li>
                <li className="Project-languages">
                React Native, Expo, Google Firebase
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