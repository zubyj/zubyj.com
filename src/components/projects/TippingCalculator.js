import React from 'react';
import ProjectItem from './ProjectItem';
import Calculate from '@mui/icons-material/Calculate';

function TippingCalculator() {

    const name = "Tipping Calculator";
    const icon = <Calculate className="Calculate-icon" />;
    const buttonName = "Open Website";
    const path = '/projects/tipping-calculator/';
    const imgPath = require('../../img/projects/tipping-calculator.png');

    const description = 
        <div>
            <ul>
                <li>
                One of the first apps I made while I was learning HTML, CSS, and JS
                </li>
                <li>
                Given total amount and tip, calculates the final bill and
                <span className="Important-text"> predicts your mood with a funny image.</span>
                </li>
                <li>
                Made from scratch. (No additional libraries used)
                </li>
                <li className="Project-languages">
                 HTML, CSS, Javascript
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} buttonName={buttonName} path={path} imgPath={imgPath} description={description} />
        </div>
    )
}

export default TippingCalculator;