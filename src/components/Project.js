import React from 'react';

function Project({name, imgPath}) {
    return (
        <div>
            <img className="Project-img" src={imgPath} />   
        </div>
    )
}
export default Project;