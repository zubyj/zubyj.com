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
                    Created website for American nonprofit organization, APPNA Northern California Chapter
                </li>

                <li>
                    Allows users to <span className="Important-text">schedule appointments for a free health clinic </span>
                    led by licensed APPNA physicians offered every Sunday in San Jose, CA
                </li>
                <li>
                    Attained a total of 
                    <span className="Important-text"> 447 users</span>  as of February 2021
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