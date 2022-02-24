import React from 'react';
import ProjectItem from './ProjectItem';
import ArticleIcon from '@mui/icons-material/Article';

function Appnaca() {

    const name = "appnaca.org"

    const sideA = 
        <div>
            <h3>Website </h3>
            <p>
                Created main website for American nonprofit organization, APPNA’s Northern California Chapter
            </p>
        </div>

    const sideB = 
        <ul>
            <li>
                Attained a total of 447 users as of February 2021
            </li>
            <li>
                Allows users to schedule appointments for a free health clinic led by licensed APPNA physicians offered every Sunday in San Jose, CA
            </li>
            <li>
                Accumulated ~1,000 downloads to date
            </li>
            <li>
                Worked directly with the chapter President to add content including informing users of donation projects, upcoming Covid-19 webinars, and free health clinic updates
            </li>
        </ul>

    const icon = <ArticleIcon className="About-item-icon Resume-icon" />

    const imgPath = require('../../img/projects/MyMorph.png')

    return (
        <div>
            <ProjectItem name={name} icon={icon} imgPath={imgPath} sideA={sideA} sideB={sideB} />
        </div>
    )
}

export default Appnaca;