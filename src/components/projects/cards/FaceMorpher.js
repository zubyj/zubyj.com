import React from 'react';
import ProjectItem from '../ProjectItem';
import PeopleIcon from '@mui/icons-material/People';

function FaceMorpher() {

    const name = "FaceMorpher";
    const icon = <PeopleIcon className="Facemorpher-icon" />
    const buttonName = "View in iOS App Store";
    const path = 'https://apps.apple.com/us/app/mymorph/id1554421298';
    const imgPath = require('../../../img/projects/MyMorph.png')

    const description =
        <div>
            <ul>
                <li>
                    Created a mobile app using React Native that blends two faces together to create a unique morphed image, leading to over <span className="Important-text">13,000 downloads</span> on the iOS App Store
                </li>
                <li>
                    Implemented client-side input validation and server logging mechanisms, leading to a <span className="Important-text">10% reduction</span>in server load and enhancing app security
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