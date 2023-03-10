import React from 'react';
import ProjectItem from './ProjectItem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function Appnaca() {

    const name = "appnaca.org";
    const icon = <LocalHospitalIcon className="Appna-icon" />;
    const buttonName = "Open Website";
    const path = 'https://appnaca.org';
    const imgPath = require('../../img/projects/appnaca.png');

    const description =
        <div>
            <ul>
                <li>
                    Designed and hosted the website for a local nonprofit organization, resulting in over <span className="Important-text">600 visitors</span>
                </li>
                <li>
                    Allow users to donate to various charities, schedule appointments at free health clinics, and contact board members to register for the organization
                </li>
                <li className="Project-languages">
                    ExpressJS, Nginx, Bootstrap 4, Adobe XD, Google Analytics, and DigitalOcean
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description} />
        </div>
    )
}

export default Appnaca;