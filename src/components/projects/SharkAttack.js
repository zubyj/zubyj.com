import React from 'react';
import ProjectItem from './ProjectItem';
import Waves from '@mui/icons-material/Waves';

function SharkAttack() {

    const name = "Shark Attack Game"
    const icon = <Waves className="Waves-icon"/>
    const buttonName = "Open Browser Game"
    const path = 'https://zubydoo.itch.io/shark-attack';
    const imgPath = require('../../img/projects/shark-attack-game.png');

    const description = 
        <div>
            <ul>
                <li>Created with Unity</li>
                <li>
                    Objective - Dodge the shark and
                    <span className="Important-text"> find the hidden treasure.</span> Beat all 5 levels to win the game!
                </li>
                <li>
                    <span className="Important-text">Created in collaboration with Elena Pearson </span>
                    for CS108 Introduction to Game Studies
                </li>
                <li className="Project-languages">
                    Unity, C++, Hosted on itch.io, Artwork made using pixilart.com
                </li>
            </ul>
        </div>

    return (
        <div>
            <ProjectItem name={name} icon={icon} path={path} buttonName={buttonName} imgPath={imgPath} description={description} />
        </div>
    )
}

export default SharkAttack;