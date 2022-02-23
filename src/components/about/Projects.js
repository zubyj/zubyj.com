import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AboutItem from './AboutItem';

function Projects() {

    const content = () => {
        return (
            <ul>
                <li>
                    <h4>Face Morpher</h4>
                    <p>Avaiable on the iOS App Store</p>
                    <p>~37,000 image files generated from Nov 2021 to date.</p>
                    <p>ExpressJS, Twitter Bootstrap, Facebook API, Google Maps API, Nginx, DigitalOcean, Google Analytics</p>
                </li>
                <li>
                    <h4>Smart Countdown Timer (Windows/iOS)</h4>
                    <p>Available for download on Windows and iOS</p>
                    <p>ElectronJS, ReactJS, ExpressJS, MySQL, Trello, Docker, DigitalOcean, Github Actions</p>
                </li>
            </ul>   
        )
    }

    return (
        <div>
            <AboutItem name="Projects" icon={<SchoolIcon />} content={content()} />
        </div>
    )
}

export default Projects;