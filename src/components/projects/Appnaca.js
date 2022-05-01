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
                Developed and hosted the main website for a local nonprofit organization
                </li>
                <li>
                Worked with chapter president to add content including donation campaigns and <span className="Important-text">scheduling appointments for free health clinics</span> offered in San Jose, CA
                </li>
                <li>
                Reached  <span className="Important-text"> 486 </span> visitors since the website deployed
                </li>
                <li className="Project-languages">
                NodeJS, Bootstrap, Nginx, ExpressJS, Google Maps API, Google Analytics, DigitalOcean</li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description} />
        </div>
    )
}

export default Appnaca;