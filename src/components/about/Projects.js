import React from 'react';
import GridItem from './AboutItem';
import AppsIcon from '@mui/icons-material/Apps';

function Projects() {

    const sideA = 
        <ul>
            <li>
                <h4>Face Morpher (MyMorph)</h4>
                <a className="App-link" target="_blank" href="https://apps.apple.com/us/app/mymorph/id1554421298" onClick={(e) => e.stopPropagation()}>
                    <p>Available on the iOS App Store</p>
                </a>
                <p>
                    <span className="Important-text">~37,000 image files generated </span>
                    from Nov 2021 to date.</p>
                <p className="Project-languages">ExpressJS, Twitter Bootstrap, Facebook API, Google Maps API, Nginx, DigitalOcean, Google Analytics</p>
            </li>
        </ul>   

    const sideB = 
        <ul>
            <li>
                <h4>Smart Countdown Timer (Windows/iOS)</h4>
                <a className="App-link" target="_blank" href="https://icaretimer.com" onClick={(e) => e.stopPropagation()}>
                    <p>icaretimer.com</p>
                </a>
                <p>Prevent eye strain by following the 20-20-20 principle</p>
                <p className="Project-languages">ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions</p>
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