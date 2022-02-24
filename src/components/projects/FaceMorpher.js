import React from 'react';
import ProjectItem from './ProjectItem';
import Link from '@mui/material/Link';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

function FaceMorpher() {

    const name = "FaceMorpher";

    const sideA = 
        <div>
            <div>
                <h4>iOS App</h4>
                <Link to="https://apps.apple.com/us/app/mymorph/id1554421298">
                    Available on the iOS App Store
                </Link>
            </div>
            <p>
                Morphs two faces together using computer vision.
            </p>
        </div>

    const sideB = 
        <ul>
            <li>
                Allows users to morph two faces together utilizing computer vision
            </li>
            <li>
                Generated ~37,000 image files between November 2021 and February 2022
            </li>
            <li>
                Accumulated ~1,000 downloads to date
            </li>
        </ul>

    const icon = <PeopleOutlineIcon />

    const imgPath = require('../../img/projects/MyMorph.png')

    return (
        <div>
            <ProjectItem name={name} icon={icon} imgPath={imgPath} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default FaceMorpher;