import React from 'react';

function Project({name, imgPath}) {
    return (
        <div>
            <p className="Project-name">{name}</p>
            <img className="Project-img" src={imgPath} /> 
        </div>
    )
}
export default Project;