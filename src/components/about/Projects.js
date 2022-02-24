import React from 'react';
import GridItem from './AboutItem';
import AppsIcon from '@mui/icons-material/Apps';

function Projects() {

    const sideA = 
        <ul>
            <li>
                <h4>Face Morpher (MyMorph)</h4>
                <a className="App-link" target="_blank" href="https://apps.apple.com/us/app/mymorph/id1554421298">
                    <p>Avaiable on the iOS App Store</p>
                </a>
                <p>~37,000 image files generated from Nov 2021 to date.</p>
                <p>ExpressJS, Twitter Bootstrap, Facebook API, Google Maps API, Nginx, DigitalOcean, Google Analytics</p>
            </li>
        </ul>   

    const sideB = 
        <ul>
            <li>
                <h4>Smart Countdown Timer (Windows/iOS)</h4>
                <p>Available for download on Windows and iOS</p>
                <p>ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions</p>
            </li>
        </ul>

    const icon = <AppsIcon className="Projects-icon" />

    return (
        <div>
            <GridItem name="Projects" icon={icon} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Projects;